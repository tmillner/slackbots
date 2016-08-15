if (!process.env.bot_token) {
    console.log('Error: Specify bot token in environment');
    process.exit(1);
}

if (!process.env.google_token) {
    console.log('Error: Specify google api token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');
var https = require('https');
var Promise = require('promise');

var controller = Botkit.slackbot({
    debug: true
});

var bot = controller.spawn({
    token: process.env.bot_token
}).startRTM();

var google_token = process.env.google_token;

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });

    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Hello ' + user.name + '!!');
        } else {
            bot.reply(message, 'Hello.');
        }
    });
});

function respond(bot, message, messageResponse) {
    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });

    controller.storage.users.get(message.user, function(err, user) {
        bot.reply(message, messageResponse);
    });
}


function invokeGoogleDriveSearch() {
    return new Promise(function(res, rej) {
        https.get('https://www.googleapis.com/drive/v2/files?access_token=' + google_token, function(result) {
            console.log("Google API response: " + result.statusCode);
            var body = "";
            result.on('data', function(chunk) { 
                body += chunk;
            });
            result.on('end', function(){
                try {
                    var json = JSON.parse(body);
                    return res(json);
                } catch (e) {
                    return rej(e.message);
                }
            })
        }).on('error', function(e) {
          console.log("Google API  error: " + e.message);
          return rej(e.message);
        });
    });
}

function findUpdatedFiles(resultScope, dateTerm) {
    return new Promise(function(res, rej) {
        var hitDocuments = [];
        console.log("Result is " + resultScope);
        if (resultScope.items === undefined) { 
            return hitDocuments 
        }
        try {
            resultScope.items.forEach(function(e,i,a){
                console.log(e.modifiedDate);
                if (e.modifiedDate > slackDateTerm(dateTerm)) {
                    var highestParent = e.parents.length - 1;
                    hitDocuments.push({
                        "id": e.id, 
                        "name": e.title, 
                        "uploaded":  e.createdDate,
                        "updated": e.modifiedDate,
                        "owner": e.ownerNames[0],
                        "link": e.alternateLink,
                        "parentFolder": e.parents[0].isRoot ? "ROOT" : e.parents[highestParent].id,
                        "toString": function() { return (e.title + " " + 
                                    e.createdDate + " " + 
                                    e.ownerNames[0] + " " +
                                    e.alternateLink);
                                }
                        });
                }
            });
            return res(hitDocuments);
        } catch (e) {
            rej(e.message);
        }
    });
}

function findParentFolders(resultScope, fileHits) {
    return new Promise(function(res, rej) {
        var hitFolders = [];
        try {
            fileHits.forEach(function(e,i,a){
                if (hitFolders.find(function(item) {
                    return e.parentFolder.search(item.id) !== -1;
                }) === undefined) {
                    if (e.parentFolder === "ROOT") {
                        hitFolders.push({
                            "id": "ROOT", 
                            "name": "ROOT", 
                            "toString": function() { return ("ROOT")}
                        });
                    }
                    else {
                        var theFolder = resultScope.items.find(function(item) {
                            return e.parentFolder === item.id;
                        });
                        if (theFolder !== undefined) 
                        {
                            hitFolders.push({
                                "id": e.parentFolder, 
                                "name": theFolder.title, 
                                "toString": function(){ return (theFolder.title)}
                            });
                        }
                    }
                }
            });
            console.log("findParentFolders result = " + hitFolders);
            return res(hitFolders);
        } catch(e) {
            rej(e.message);
        }
    });
}

function listFolderFiles(folder, fileHits) {
    var folderFileHits = [];
    fileHits.forEach(function(fileHit) {
        console.log("folder id = " + folder.id + " parent folder is " + fileHit.parentFolder);
        if (folder.id === fileHit.parentFolder) {
            folderFileHits.push(fileHit + "\n");
        }
    });
    return "" + folderFileHits;
}

function slackDateTerm(dateTerm) {
    var targetDate;
    if (dateTerm.search("today") !== -1) {
        targetDate = new Date(
            new Date(
                new Date(
                    new Date(
                        new Date().setUTCHours(0)
                    ).setUTCMinutes(0)
                ).setUTCSeconds(0)
            ).setUTCMilliseconds(0)
        ).toISOString();
    }
    return targetDate;
}

var dateTerms = ["today", "yesterday", "this week", "last week", "this month"];

controller.hears('files updated (.*)', 'direct_message,direct_mention,mention', function(bot, message) {
    var dateTerm = message.match[1];
    console.log("log time is " + dateTerm);
    var askFlavor = function(err, convo) {

        invokeGoogleDriveSearch().then(function(bodyPayload) {
            //console.log("from invoke google Search got " + bodyPayload);
            return findUpdatedFiles(bodyPayload, dateTerm).then(function(fileHits){
                console.log("found the file hits " + fileHits);
                return findParentFolders(bodyPayload, fileHits).then(function(folderHits) {
                    // When this callbacks body does not fire, perhaps a variable is misspelled
                    // ex.  console.log('something ' + folder);
                    if (!folderHits || folderHits == "") {
                        return convo.say("There were no files found " + dateTerm);
                    }
                    console.log("final result " + folderHits);
                    convo.ask("Sure, here's all your folders with updated files today:\n" + 
                            folderHits +
                            "\nWhich folder would you like to search?", function(response, convo) {
                        var targetFolder = folderHits.find(function(folder) {
                            return folder.name.toLowerCase().search(response.text.toLowerCase()) !== -1
                        });
                        if (targetFolder === undefined) {
                            convo.say("Sorry I didn't find that folder")
                        }
                        else {
                            convo.say(listFolderFiles(targetFolder, fileHits));
                        }
                        convo.next();
                    });
                }, function(failedFolders) {
                    console.log("Failed to find matching Folders :( " + failedFolders);
                });
            }, function(fail) {console.log("FAILED " + fail)});
        }, function(failedBodyPayload) {
            console.log("Failed invoke google search " + failedBodyPayload);
            return failedBodyPayload;
        })
    }

    if (dateTerms.find(function(item) {
        return dateTerm.toLowerCase().search(item.toLowerCase()) !== -1;
    }) !== undefined) {
        bot.startConversation(message, askFlavor);
    }
});

controller.hears(['files uploaded today'], 'direct_message,direct_mention,mention', function(bot, message) {
    
});

controller.hears(['all files in'], 'direct_message,direct_mention,mention', function(bot, message) {
    
});

controller.hears(['all folders'], 'direct_message,direct_mention,mention', function(bot, message) {
    
});


