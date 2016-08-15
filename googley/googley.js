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
var ROOT = "ROOT";

var controller = Botkit.slackbot({
    debug: true
});

var bot = controller.spawn({
    token: process.env.bot_token
}).startRTM();

var google_token = process.env.google_token;


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

function _findFilesBy(resultScope, dateTerm, by)
{
    return new Promise(function(res, rej) {
        var hitDocuments = [];
        console.log("Result is " + resultScope);
        if (resultScope.items === undefined) { 
            return hitDocuments 
        }
        try {
            resultScope.items.forEach(function(e,i,a){
                console.log(e[by]);
                if (e[by] >= slackDateTerm(dateTerm).start &&
                    e[by] < slackDateTerm(dateTerm).end) {
                    var highestParent = e.parents.length - 1;
                    hitDocuments.push({
                        "id": e.id, 
                        "name": e.title, 
                        "uploaded":  e.createdDate,
                        "updated": e.modifiedDate,
                        "owner": e.ownerNames[0],
                        "link": e.alternateLink,
                        "parentFolder": e.parents[highestParent].isRoot 
                        ? ROOT + e.parents[highestParent].id : e.parents[highestParent].id,
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

function findUploadedFiles(resultScope, dateTerm) {
    console.log("about to find uploaded files!")
    console.log(dateTerm)
    return _findFilesBy(resultScope, dateTerm, "createdDate");
}

function findUpdatedFiles(resultScope, dateTerm) {
    console.log("about to find updated files!")
        console.log(dateTerm)
    return _findFilesBy(resultScope, dateTerm, "modifiedDate");
}

function findParentFolders(resultScope, fileHits) {
    return new Promise(function(res, rej) {
        var hitFolders = [];
        try {
            fileHits.forEach(function(e,i,a){
                if (hitFolders.find(function(item) {
                    return e.parentFolder.search(item.id) !== -1;
                }) === undefined) {
                    if (e.parentFolder.search(ROOT) === 0) {
                        hitFolders.push({
                            "id": e.parentFolder.split(ROOT)[1], 
                            "name": ROOT, 
                            "toString": function() { return (ROOT)}
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
    var targetDate = {start: "", end: "" };
    var todayStart = new Date(
        new Date(
            new Date(
                new Date(
                    new Date().setUTCHours(0)
                ).setUTCMinutes(0)
            ).setUTCSeconds(0)
        ).setUTCMilliseconds(0)
    );
    var todayEnd = new Date(new Date(todayStart).setDate(todayStart.getDate() +1));

    console.log("about to find date term " + dateTerm);
    if (dateTerm.toLowerCase().search("today") !== -1) {
        targetDate.start = todayStart;
        targetDate.end = todayEnd;
    }
    else if (dateTerm.toLowerCase().search("yesterday") !== -1) {
        targetDate.start = new Date(new Date(todayStart).setDate(todayStart.getDate() -1));
        targetDate.end = new Date(new Date(todayEnd).setDate(todayEnd.getDate() -1));
    }
    else if (dateTerm.toLowerCase().search("week") !== -1) {
        var thisWeekStart = todayStart;
        for (var i=7; i>0; i--) {
            if (thisWeekStart.toString().toLowerCase().search("sun") === -1) {
                thisWeekStart.setDate(thisWeekStart.getDate() -1);
            }
            else {
                break;
            }
        }
        // Return this week
        targetDate.start = thisWeekStart;
        targetDate.end = todayEnd;

        if (dateTerm.toLowerCase().search("last") !== -1) {
            var lastWeekEnd = thisWeekStart;
            targetDate.start = thisWeekStart.setDate(thisWeekStart.getDate() - 7);
            targetDate.end = lastWeekEnd;
        }
    }
    else if (dateTerm.toLowerCase().search("this month") !== -1) {
        targetDate.start = new Date(new Date(todayStart).setDate(1));
        targetDate.end = todayEnd;
    }
    else if (dateTerm.toLowerCase().search("all") !== -1) {
        targetDate.start = new Date(new Date().setYear(1900))
        targetDate.end = todayEnd;
    }
    return targetDate;
}

var dateTerms = ["today", "yesterday", "this week", "last week", "this month"];


var _askForFilesAttribute = function(findByFunction, dateTerm) {
    return function(err, convo) {

        invokeGoogleDriveSearch().then(function(bodyPayload) {
            //console.log("from invoke google Search got " + bodyPayload);
            return findByFunction(bodyPayload, dateTerm).then(function(fileHits){
                console.log("found the file hits " + fileHits);
                return findParentFolders(bodyPayload, fileHits).then(function(folderHits) {
                    // When this callbacks body does not fire, perhaps a variable is misspelled
                    // ex.  console.log('something ' + folder);
                    if (!folderHits || folderHits == "") {
                        return convo.say("There were no files found " + dateTerm);
                    }
                    console.log("final result " + folderHits);
                    convo.ask("Sure, here's all your folders with matching files " + dateTerm + ":\n" + 
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
}

var _askForFilesFolder = function(findByFunction, dateTerm, folder) {
    return function(err, convo) {

        invokeGoogleDriveSearch().then(function(bodyPayload) {
            //console.log("from invoke google Search got " + bodyPayload);
            return findByFunction(bodyPayload, dateTerm).then(function(fileHits){
                console.log("found the file hits " + fileHits);
                return findParentFolders(bodyPayload, fileHits).then(function(folderHits) {
                    if (!folderHits || folderHits == "") {
                        return convo.say("There were no files found " + dateTerm);
                    }
                    console.log("final result " + folderHits);
                    // All files in (folder)
                    if (folder !== undefined && folder !== "") {
                        var targetFolder = folderHits.find(function(f) {
                            return f.name.toLowerCase().search(folder.toLowerCase()) !== -1
                        });
                        if (targetFolder === undefined) {
                            convo.g("Sorry I didn't find the folder " + folder);
                        }
                        else {
                            convo.say("Sure, here's all your folders in: " + folder + "\n" + 
                                listFolderFiles(targetFolder, fileHits));
                        }
                        convo.next();
                    }
                    // All folders
                    else {
                        convo.ask("Sure, here's all your folders:\n" + folderHits +
                            "\nJust type the name of the one you want to search", function(response, convo) {
                            var targetFolder = folderHits.find(function(f) {
                                return f.name.toLowerCase().search(response.text.toLowerCase()) !== -1
                            });
                            if (targetFolder === undefined) {
                                convo.say("Sorry I didn't find the folder " + response.text);
                            }
                            else {
                                convo.say("Great, here's all the files in "+ response.text + "\n" +
                                    listFolderFiles(targetFolder, fileHits));
                            }
                            convo.next();
                        });
                    }
                }, function(failedFolders) {
                    console.log("Failed to find matching Folders :( " + failedFolders);
                });
            }, function(fail) {console.log("FAILED " + fail)});
        }, function(failedBodyPayload) {
            console.log("Failed invoke google search " + failedBodyPayload);
            return failedBodyPayload;
        })
    }
}

controller.hears('files updated (.*)', 'direct_message,direct_mention,mention', function(bot, message) {
    var dateTerm = message.match[1];
    console.log("log time is " + dateTerm);
    
    if (dateTerms.find(function(item) {
        return dateTerm.toLowerCase().search(item.toLowerCase()) !== -1;
    }) !== undefined) {
        console.log('starting');
        bot.startConversation(message, _askForFilesAttribute(findUpdatedFiles, dateTerm));
    }
});

controller.hears(['files uploaded (.*)'], 'direct_message,direct_mention,mention', function(bot, message) {
    var dateTerm = message.match[1];
    console.log("log time is " + dateTerm);
    
    if (dateTerms.find(function(item) {
        return dateTerm.toLowerCase().search(item.toLowerCase()) !== -1;
    }) !== undefined) {
        bot.startConversation(message, _askForFilesAttribute(findUploadedFiles, dateTerm));
    }
});

controller.hears(['all files in (.*)'], 'direct_message,direct_mention,mention', function(bot, message) {
    var folder = message.match[1];
    console.log("folder is " + folder);
    bot.startConversation(message, _askForFilesFolder(findUploadedFiles, "all", folder));
});

controller.hears(['all folders'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.startConversation(message, _askForFilesFolder(findUploadedFiles, "all", ""));
});


