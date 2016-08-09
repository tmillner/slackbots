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

var options = {
  host: 'https://www.googleapis.com/drive/v2',
  path: '/files'
};

https.get('https://www.googleapis.com/drive/v2/files?access_token=' + google_token, function(res) {
  console.log("Google API response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Google API  error: " + e.message);
});

    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Hello ' + user.name + '!!');
        } else {
            bot.reply(message, 'Hello.');
        }
    });
});

controller.hears(['files updated today'], 'direct_message,direct_mention,mention', function(bot, message) {
    
});

controller.hears(['files uploaded today'], 'direct_message,direct_mention,mention', function(bot, message) {
    
});

controller.hears(['all files in'], 'direct_message,direct_mention,mention', function(bot, message) {
    
});

controller.hears(['all folders'], 'direct_message,direct_mention,mention', function(bot, message) {
    
});

