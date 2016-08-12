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

function invokeGoogleDriveSearch() {
    https.get('https://www.googleapis.com/drive/v2/files?access_token=' + google_token, function(res) {
      console.log("Google API response: " + res.statusCode);
      return res.body;
    }).on('error', function(e) {
      console.log("Google API  error: " + e.message);
    });
}

function findUpdatedFiles(result, dateTerm) {
    var hitDocuments = [];
    result.items.forEach(function(e,i,a){
        console.log(e.modifiedDate);
        if (e.modifiedDate > slackDateTerm(dateTerm)) {
            hitDocuments.push({
                "id": e.id, 
                "name": e.title, 
                "uploaded": e.createdDate,
                "updated": e.modifiedDate,
                "owner": e.ownerNames[0],
                "link": e.alternateLink,
                "parentFolder": e.parents[0].isRoot ? "ROOT" : e.parents[0].id,
                "toString": e.title + " " + 
                            e.createdDate + " " + 
                            e.ownerNames[0] + " " +
                            e.alternateLink
                });
        }
    });
    return hitDocuments;
}

function findParentFolders(resultScope, fileHits) {
    var hitFolders = [];

    fileHits.forEach(function(e,i,a){
        if (hitFolders.find(function(item) {
            return e.parentFolder.search(item.id) !== -1;
        }) === undefined) {
            if (e.parentFolder === "ROOT") {
                hitFolders.push({id: "ROOT", name: "ROOT"});
            }
            else {
                var theFolder = resultScope.find(function(item) {
                    return e.parentFolder === item.id;
                });
                if (theFolder !== undefined) 
                {
                    hitFolders.push({id: e.parentFolder, name: theFolder.title});
                }
            }
        }
    })
}

function listFolderFiles(folder, fileHits) {
    var folderFileHits = [];
    fileHits.forEach(function(fileHit) {
        if (folder.id === fileHit.parentFolder) {
            folderFileHits.push(fileHit);
        }
    });
    return folderFileHits;
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
    var askFlavor = function(response, convo) {
        var resultScope = invokeGoogleDriveSearch();
        console.log("result scope is " + resultScope);
        var fileHits = findUpdatedFiles(resultScope, dateTerm);
        console.log(fileHits);
        var folderHits = findParentFolders(resultScope, fileHits);
        console.log(folderHits);
        convo.ask("Sure, here's all your folders with updated files today:\n" + 
                folderHits +
                "\nWhich folder would you like to search?", function(response, convo) {
            if (folderHits.find(function(folder) {
                return folder.name.toLowerCase().search(response.toLowerCase()) !== -1
            }) === undefined) {
                convo.say("Sorry I didn't find that folder")
            }
            else {
                convo.say('Ok');
                convo.say(listFolderFiles(response, fileHits));
            }
        });
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


