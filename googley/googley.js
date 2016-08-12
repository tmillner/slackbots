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

var result = {
 "kind": "drive#fileList",
 "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/Jv7KI2AyJDyTcdmGG51BDJaycm8\"",
 "selfLink": "https://www.googleapis.com/drive/v2/files",
 "items": [
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9UWN1a0Z3RTFQdnFVbVZDUUw4WXpNYWxjMktr",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ3MDIwMDA5Mjc2NQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9UWN1a0Z3RTFQdnFVbVZDUUw4WXpNYWxjMktr",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9UWN1a0Z3RTFQdnFVbVZDUUw4WXpNYWxjMktr&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9UWN1a0Z3RTFQdnFVbVZDUUw4WXpNYWxjMktr/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_word_list.png",
   "title": "文思海辉入职体检通知——上海20150820.doc",
   "mimeType": "application/msword",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-08-01T05:23:04.000Z",
   "modifiedDate": "2016-08-03T04:54:52.765Z",
   "modifiedByMeDate": "2016-08-03T04:54:52.765Z",
   "lastViewedByMeDate": "2016-08-05T08:55:00.107Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4182",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9UWN1a0Z3RTFQdnFVbVZDUUw4WXpNYWxjMktr/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/O7epYOQoejRS17HEH84wfGyMO-w\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9UWN1a0Z3RTFQdnFVbVZDUUw4WXpNYWxjMktr/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "文思海辉入职体检通知——上海20150820.doc",
   "fileExtension": "doc",
   "md5Checksum": "e48d5ca1b3ed0c3e9dc1872813ee2987",
   "fileSize": "49152",
   "quotaBytesUsed": "49152",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9NUVkZjJYNld5VENnVTN6Qy95aVEwYWFwZm1FPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9dEQzTzItcUFnMEZiOFFxRFVvM3dtRnZVR2Jz",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ3MDE5MzAwOTIzNQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9dEQzTzItcUFnMEZiOFFxRFVvM3dtRnZVR2Jz",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9dEQzTzItcUFnMEZiOFFxRFVvM3dtRnZVR2Jz&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9dEQzTzItcUFnMEZiOFFxRFVvM3dtRnZVR2Jz/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_word_list.png",
   "title": "SDET_CheckList.docx",
   "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": false
   },
   "createdDate": "2016-07-29T09:20:58.000Z",
   "modifiedDate": "2016-08-03T02:56:49.235Z",
   "modifiedByMeDate": "2016-08-03T02:56:49.235Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4174",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9dEQzTzItcUFnMEZiOFFxRFVvM3dtRnZVR2Jz/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/L1d1Lgn_NDpyIEfaYG73IIPCGrg\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9dEQzTzItcUFnMEZiOFFxRFVvM3dtRnZVR2Jz/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "SDET_CheckList.docx",
   "fileExtension": "docx",
   "md5Checksum": "d3e55f1d3acb9dffd5b645f30df664fa",
   "fileSize": "16682",
   "quotaBytesUsed": "16682",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9WEg3UzVtVmhWaFZ4M013Y1psZXZEOW12VStFPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9OVpzdHY0Y2xPTTg",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2ODk2NTE0NTA4MQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9OVpzdHY0Y2xPTTg",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9OVpzdHY0Y2xPTTg&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9OVpzdHY0Y2xPTTg/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/generic_app_icon_16.png",
   "title": "flashbackup-1607200552.pqb",
   "mimeType": "application/x-sqlite3",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-07-19T21:52:17.679Z",
   "modifiedDate": "2016-07-19T21:52:25.081Z",
   "modifiedByMeDate": "2016-07-19T21:52:25.081Z",
   "lastViewedByMeDate": "2016-07-19T21:52:25.081Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4150",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9OVpzdHY0Y2xPTTg/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/pr9MLK2zUZEEzMaYAf2PVc7NWcg\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9OVpzdHY0Y2xPTTg/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "flashbackup-1607200552.pqb",
   "fileExtension": "pqb",
   "md5Checksum": "6439a6c55aa42bd96b238e7064395e48",
   "fileSize": "90112",
   "quotaBytesUsed": "90112",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9S1FaYTR0TjU4MUtTYzRoRC81V2lCdlhER0hFPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9T3F1MmQ3MTlMcEU",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2ODk2NTEyMDY4MQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9T3F1MmQ3MTlMcEU",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9T3F1MmQ3MTlMcEU&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9T3F1MmQ3MTlMcEU/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/generic_app_icon_16.png",
   "title": "settingsbackup-1607200551.xml",
   "mimeType": "application/xml",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-07-19T21:51:56.312Z",
   "modifiedDate": "2016-07-19T21:52:00.681Z",
   "modifiedByMeDate": "2016-07-19T21:52:00.681Z",
   "lastViewedByMeDate": "2016-07-19T21:52:00.681Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4145",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9T3F1MmQ3MTlMcEU/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/E0KHMqtxMg_zziYfKMyakDDNtoU\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9T3F1MmQ3MTlMcEU/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "settingsbackup-1607200551.xml",
   "fileExtension": "xml",
   "md5Checksum": "667bc2d511289e5a1f8477f244835a67",
   "fileSize": "21164",
   "quotaBytesUsed": "21164",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9ZlI4S3FQZHkwOGdyZFdieDYwdS9UbHJ6TUg0PQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9Z0llb1VjdWRpbjdwZm8zOUdPMG1qVTg5ZTh3",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2ODk2MjcyMTA3OQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9Z0llb1VjdWRpbjdwZm8zOUdPMG1qVTg5ZTh3",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9Z0llb1VjdWRpbjdwZm8zOUdPMG1qVTg5ZTh3&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9Z0llb1VjdWRpbjdwZm8zOUdPMG1qVTg5ZTh3/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_word_list.png",
   "title": "G11N_Dev_Engineer_JD_20160715.docx",
   "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": false
   },
   "createdDate": "2016-07-18T10:33:18.000Z",
   "modifiedDate": "2016-07-19T21:12:01.079Z",
   "modifiedByMeDate": "2016-07-19T21:12:01.079Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4141",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9Z0llb1VjdWRpbjdwZm8zOUdPMG1qVTg5ZTh3/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/VkTB3OJ9zNsBTC5Aai7jr2UM7E8\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9Z0llb1VjdWRpbjdwZm8zOUdPMG1qVTg5ZTh3/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "G11N_Dev_Engineer_JD_20160715.docx",
   "fileExtension": "docx",
   "md5Checksum": "66098c80df2c9c6a80b43d3e175beab5",
   "fileSize": "16374",
   "quotaBytesUsed": "16374",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9dGtWOFFDaVV4SUg1dnRNUitnUC9sdFVvcDhrPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1ctL7cn3k54wJWjzj6joq8u2loQsdQ5pOQvAF2Qa-shM",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2ODAxNjE1MTMzMQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1ctL7cn3k54wJWjzj6joq8u2loQsdQ5pOQvAF2Qa-shM",
   "alternateLink": "https://docs.google.com/document/d/1ctL7cn3k54wJWjzj6joq8u2loQsdQ5pOQvAF2Qa-shM/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1ctL7cn3k54wJWjzj6joq8u2loQsdQ5pOQvAF2Qa-shM/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "FirstScreen - Application Software QA Engineer - Test",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-07-08T22:03:32.917Z",
   "modifiedDate": "2016-07-08T22:15:51.331Z",
   "modifiedByMeDate": "2016-07-08T22:13:28.371Z",
   "lastViewedByMeDate": "2016-08-03T02:57:16.745Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4175",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1ctL7cn3k54wJWjzj6joq8u2loQsdQ5pOQvAF2Qa-shM/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/Czga9KLAtVynhpYiaTnUlpjfS54\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1ctL7cn3k54wJWjzj6joq8u2loQsdQ5pOQvAF2Qa-shM/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1w14eUaG9PsDIatWUA_Zs4GaFkVab9JTEUKUOhDmqrlc",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2MzAzNDA2NTkxNg\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1w14eUaG9PsDIatWUA_Zs4GaFkVab9JTEUKUOhDmqrlc",
   "alternateLink": "https://docs.google.com/document/d/1w14eUaG9PsDIatWUA_Zs4GaFkVab9JTEUKUOhDmqrlc/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1w14eUaG9PsDIatWUA_Zs4GaFkVab9JTEUKUOhDmqrlc/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "Trevor Millner-Resume_2.docx",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-05-12T05:47:20.387Z",
   "modifiedDate": "2016-05-12T06:21:05.916Z",
   "modifiedByMeDate": "2016-05-12T06:21:05.916Z",
   "lastViewedByMeDate": "2016-05-12T06:21:05.916Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4088",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1w14eUaG9PsDIatWUA_Zs4GaFkVab9JTEUKUOhDmqrlc/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/p7ZJnPnmtH7DqhJMebcmhQS_xnA\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1w14eUaG9PsDIatWUA_Zs4GaFkVab9JTEUKUOhDmqrlc/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "17tVAbmfKilmvkMA-5r9QCR10XJL6H7G2njoCDh9Mi-U",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2MzAyMTQyNDU5Mg\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/17tVAbmfKilmvkMA-5r9QCR10XJL6H7G2njoCDh9Mi-U",
   "alternateLink": "https://docs.google.com/document/d/17tVAbmfKilmvkMA-5r9QCR10XJL6H7G2njoCDh9Mi-U/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/17tVAbmfKilmvkMA-5r9QCR10XJL6H7G2njoCDh9Mi-U/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "Trevor Millner-Resume_2.docx",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-05-12T02:50:23.693Z",
   "modifiedDate": "2016-05-12T02:50:24.592Z",
   "modifiedByMeDate": "2016-05-12T02:50:24.592Z",
   "lastViewedByMeDate": "2016-05-13T02:33:48.962Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4094",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/17tVAbmfKilmvkMA-5r9QCR10XJL6H7G2njoCDh9Mi-U/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/fB_LH61lrSVPTeo84ogUPQ6Cn70\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/17tVAbmfKilmvkMA-5r9QCR10XJL6H7G2njoCDh9Mi-U/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9dExVX2tBRGhWc1U",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2MzAyMTQxMTIxNA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9dExVX2tBRGhWc1U",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9dExVX2tBRGhWc1U&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9dExVX2tBRGhWc1U/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_word_list.png",
   "title": "Trevor Millner-Resume_2.docx",
   "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-05-12T02:50:11.214Z",
   "modifiedDate": "2016-05-12T02:50:11.214Z",
   "modifiedByMeDate": "2016-05-12T02:50:11.214Z",
   "lastViewedByMeDate": "2016-05-12T02:50:17.934Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4059",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9dExVX2tBRGhWc1U/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/DYpYu27VC8A3Xbk23TvC5duJ0uQ\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9dExVX2tBRGhWc1U/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "Trevor Millner-Resume_2.docx",
   "fileExtension": "docx",
   "md5Checksum": "b21be822b3a00a3e7c4504dfd4715c09",
   "fileSize": "22383",
   "quotaBytesUsed": "22383",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9eGpDV1ZDMkp4RUZvKzdEVWRUcWNxbXBKVG1zPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9S3NEejlZWVRoaEE",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ2MzAxNzQzNzA2OA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9S3NEejlZWVRoaEE",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9S3NEejlZWVRoaEE&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9S3NEejlZWVRoaEE/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_12_pdf_list.png",
   "title": "Hale-Evans, Ron - Mind Hacks.pdf",
   "mimeType": "application/pdf",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": false
   },
   "createdDate": "2016-05-12T01:42:58.353Z",
   "modifiedDate": "2016-05-12T01:43:57.068Z",
   "modifiedByMeDate": "2016-05-12T01:42:58.353Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4014",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9S3NEejlZWVRoaEE/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/4HhUYAph329LWymzQ1AdMw3tFHc\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9S3NEejlZWVRoaEE/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "Hale-Evans, Ron - Mind Hacks.pdf",
   "fileExtension": "pdf",
   "md5Checksum": "df82368c4a550b33f2a639b927891f9a",
   "fileSize": "28537826",
   "quotaBytesUsed": "28537826",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9VzIrZDJFNWVGODlzNFFpQnJFUXRpNFY4cVZFPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1nQwgYXrlxBbyh4hyDtEMQsQumaej7Ez0Uj14-Y4pWUw",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ1NjI4Nzc1NzcyMQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1nQwgYXrlxBbyh4hyDtEMQsQumaej7Ez0Uj14-Y4pWUw",
   "alternateLink": "https://docs.google.com/document/d/1nQwgYXrlxBbyh4hyDtEMQsQumaej7Ez0Uj14-Y4pWUw/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1nQwgYXrlxBbyh4hyDtEMQsQumaej7Ez0Uj14-Y4pWUw/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "ACRS Volunteer Application.doc",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-02-24T04:21:49.651Z",
   "modifiedDate": "2016-02-24T04:22:37.721Z",
   "modifiedByMeDate": "2016-02-24T04:22:37.721Z",
   "lastViewedByMeDate": "2016-02-24T04:26:15.680Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4033",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1nQwgYXrlxBbyh4hyDtEMQsQumaej7Ez0Uj14-Y4pWUw/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/iNdhA7gpjmUS34bHXqMGCAw1vi4\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1nQwgYXrlxBbyh4hyDtEMQsQumaej7Ez0Uj14-Y4pWUw/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1RxHvCgW3917zT2IBWxKydj2hF1rRghY6IT0rd1IRqYw",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ1NjIyMDUzMjI4OQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1RxHvCgW3917zT2IBWxKydj2hF1rRghY6IT0rd1IRqYw",
   "alternateLink": "https://docs.google.com/document/d/1RxHvCgW3917zT2IBWxKydj2hF1rRghY6IT0rd1IRqYw/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1RxHvCgW3917zT2IBWxKydj2hF1rRghY6IT0rd1IRqYw/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "ACRS Volunteer Application.doc",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-02-23T09:41:40.938Z",
   "modifiedDate": "2016-02-23T09:42:12.289Z",
   "modifiedByMeDate": "2016-02-23T09:42:12.289Z",
   "lastViewedByMeDate": "2016-02-23T09:42:56.198Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4036",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1RxHvCgW3917zT2IBWxKydj2hF1rRghY6IT0rd1IRqYw/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/zrIKCHk2iKan-mvOtl3B8RozNwQ\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1RxHvCgW3917zT2IBWxKydj2hF1rRghY6IT0rd1IRqYw/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9TGFMNlR6c2hjNFE",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ1NjIyMDQ4MjM2Ng\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9TGFMNlR6c2hjNFE",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9TGFMNlR6c2hjNFE&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9TGFMNlR6c2hjNFE/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_word_list.png",
   "title": "ACRS Volunteer Application.doc",
   "mimeType": "application/msword",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2016-02-23T09:41:22.366Z",
   "modifiedDate": "2016-02-23T09:41:22.366Z",
   "modifiedByMeDate": "2016-02-23T09:41:22.366Z",
   "lastViewedByMeDate": "2016-05-12T02:51:39.776Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4040",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9TGFMNlR6c2hjNFE/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/c2Jln_-QAvqSRk3qzPUyDg5uaek\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9TGFMNlR6c2hjNFE/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "ACRS Volunteer Application.doc",
   "fileExtension": "doc",
   "md5Checksum": "4d5f088328ad430f2aa76dca03465193",
   "fileSize": "101888",
   "quotaBytesUsed": "101888",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9SHZkREJTTWZzajBiK29ZWnlmZlRoUDZ5VWxBPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9OG50dEhfam05V28",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ0NjQ1MDI5NDAyNA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9OG50dEhfam05V28",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9OG50dEhfam05V28&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9OG50dEhfam05V28/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_text_list.png",
   "title": "flash-1511021542.txt",
   "mimeType": "text/plain",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2015-11-02T07:43:47.348Z",
   "modifiedDate": "2015-11-02T07:44:54.024Z",
   "modifiedByMeDate": "2015-11-02T07:44:54.024Z",
   "lastViewedByMeDate": "2016-07-04T10:33:12.046Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4108",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9OG50dEhfam05V28/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/LtPQDvdQsR_s3b7NfFEL1DIrmCA\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9OG50dEhfam05V28/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "flash-1511021542.txt",
   "fileExtension": "txt",
   "md5Checksum": "d150c6de26714005a92d46d81dced568",
   "fileSize": "37354",
   "quotaBytesUsed": "37354",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9WkZiU1Zuai9pVmRjcjBJakM3QmRpWE9vWHVjPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9NXZ4VGpuOHl0aWs",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ0NjQ1MDEyODQ2Nw\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9NXZ4VGpuOHl0aWs",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9NXZ4VGpuOHl0aWs&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9NXZ4VGpuOHl0aWs/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_text_list.png",
   "title": "flash-1511021541.txt",
   "mimeType": "text/plain",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2015-11-02T07:41:42.044Z",
   "modifiedDate": "2015-11-02T07:42:08.467Z",
   "modifiedByMeDate": "2015-11-02T07:42:08.467Z",
   "lastViewedByMeDate": "2016-07-04T10:32:44.164Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4110",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9NXZ4VGpuOHl0aWs/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/KIU-Wu84CvLL7NcbTjbVWXpiq24\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9NXZ4VGpuOHl0aWs/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "flash-1511021541.txt",
   "fileExtension": "txt",
   "md5Checksum": "f225b5f6f62876af78d9ec352b6d5379",
   "fileSize": "23225",
   "quotaBytesUsed": "23225",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9ZDljNGQ0ZzVvZ1dzL21qSm9aK0pSenhCSG9ZPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0Bwq-doVRd1h9eGYyam5HdGFFdU0",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQ0NjQ0OTc5MTE5NQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9eGYyam5HdGFFdU0",
   "webContentLink": "https://docs.google.com/uc?id=0Bwq-doVRd1h9eGYyam5HdGFFdU0&export=download",
   "alternateLink": "https://drive.google.com/file/d/0Bwq-doVRd1h9eGYyam5HdGFFdU0/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/generic_app_icon_16.png",
   "title": "flashbackup-1511021534.pqb",
   "mimeType": "application/x-sqlite3",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2015-11-02T07:34:32.620Z",
   "modifiedDate": "2015-11-02T07:36:31.195Z",
   "modifiedByMeDate": "2015-11-02T07:36:31.195Z",
   "lastViewedByMeDate": "2016-07-04T10:33:24.618Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4109",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9eGYyam5HdGFFdU0/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/G70S2BO4AIp1pMWEWgIBaeS3czE\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0Bwq-doVRd1h9eGYyam5HdGFFdU0/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "originalFilename": "flashbackup-1511021534.pqb",
   "fileExtension": "pqb",
   "md5Checksum": "169340b31e9ce863d3e39cb2298f32fc",
   "fileSize": "576512",
   "quotaBytesUsed": "576512",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0Bwq-doVRd1h9NGh5RCtEVXJQa3lkTmUrdi9kdjdQYWdxRG1JPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1TiWwARI7K-bPKTDZjNxwaf2NLABeYTBjeIYQ74-yDfQ",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTQyNzg2MTgyNzY0Mw\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1TiWwARI7K-bPKTDZjNxwaf2NLABeYTBjeIYQ74-yDfQ",
   "alternateLink": "https://docs.google.com/spreadsheets/d/1TiWwARI7K-bPKTDZjNxwaf2NLABeYTBjeIYQ74-yDfQ/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/spreadsheets/d/1TiWwARI7K-bPKTDZjNxwaf2NLABeYTBjeIYQ74-yDfQ/htmlembed",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_spreadsheet_list.png",
   "title": "Vaca in MIA",
   "mimeType": "application/vnd.google-apps.spreadsheet",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2015-04-01T03:06:57.179Z",
   "modifiedDate": "2015-04-01T04:17:07.643Z",
   "modifiedByMeDate": "2015-04-01T04:17:07.643Z",
   "lastViewedByMeDate": "2016-05-12T02:45:02.236Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4017",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1TiWwARI7K-bPKTDZjNxwaf2NLABeYTBjeIYQ74-yDfQ/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/gjsRPQi7yagOMR98032eDJI9p-s\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1TiWwARI7K-bPKTDZjNxwaf2NLABeYTBjeIYQ74-yDfQ/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "138WVT1i3dF54X1c3C651EEQE51ZqiOFNNVL_5WESfLw",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM5MzMwNTUwMTk1Nw\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/138WVT1i3dF54X1c3C651EEQE51ZqiOFNNVL_5WESfLw",
   "alternateLink": "https://docs.google.com/document/d/138WVT1i3dF54X1c3C651EEQE51ZqiOFNNVL_5WESfLw/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/138WVT1i3dF54X1c3C651EEQE51ZqiOFNNVL_5WESfLw/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "中文新词",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-10-23T05:14:26.161Z",
   "modifiedDate": "2014-02-25T05:18:21.957Z",
   "modifiedByMeDate": "2014-02-25T05:18:21.957Z",
   "lastViewedByMeDate": "2014-02-25T05:18:21.957Z",
   "markedViewedByMeDate": "2014-01-01T22:05:54.069Z",
   "version": "2969",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/138WVT1i3dF54X1c3C651EEQE51ZqiOFNNVL_5WESfLw/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/WRNv1uajS9YMc8h2_MvnJvJjMsQ\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/138WVT1i3dF54X1c3C651EEQE51ZqiOFNNVL_5WESfLw/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1ggah3QUyEWrv9GK8VIYrpFVmqdnDj1M5rHkG5HHbqIQ",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM3NzEzNDE5NjA0Mw\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1ggah3QUyEWrv9GK8VIYrpFVmqdnDj1M5rHkG5HHbqIQ",
   "alternateLink": "https://docs.google.com/spreadsheets/d/1ggah3QUyEWrv9GK8VIYrpFVmqdnDj1M5rHkG5HHbqIQ/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/spreadsheets/d/1ggah3QUyEWrv9GK8VIYrpFVmqdnDj1M5rHkG5HHbqIQ/htmlembed",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_spreadsheet_list.png",
   "title": "international group",
   "mimeType": "application/vnd.google-apps.spreadsheet",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-08-14T04:33:51.552Z",
   "modifiedDate": "2013-08-22T01:16:36.043Z",
   "modifiedByMeDate": "2013-08-22T01:16:36.043Z",
   "lastViewedByMeDate": "2016-05-12T02:53:06.596Z",
   "markedViewedByMeDate": "2013-09-16T15:53:57.736Z",
   "version": "4057",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1ggah3QUyEWrv9GK8VIYrpFVmqdnDj1M5rHkG5HHbqIQ/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/QxGtU5ct30gWXKuVjCjpoXhW3MY\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1ggah3QUyEWrv9GK8VIYrpFVmqdnDj1M5rHkG5HHbqIQ/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "19pS-WS7ivkkcTeW3mHj8K_u4TVbqSKv1H5s_wscrC60",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM3NjQ5MjEyOTY5NQ\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/19pS-WS7ivkkcTeW3mHj8K_u4TVbqSKv1H5s_wscrC60",
   "alternateLink": "https://docs.google.com/spreadsheets/d/19pS-WS7ivkkcTeW3mHj8K_u4TVbqSKv1H5s_wscrC60/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/spreadsheets/d/19pS-WS7ivkkcTeW3mHj8K_u4TVbqSKv1H5s_wscrC60/htmlembed",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_spreadsheet_list.png",
   "title": "international group",
   "mimeType": "application/vnd.google-apps.spreadsheet",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-08-14T14:55:29.695Z",
   "modifiedDate": "2013-08-14T14:55:29.695Z",
   "lastViewedByMeDate": "2016-05-12T02:52:21.306Z",
   "markedViewedByMeDate": "2013-08-14T14:56:11.789Z",
   "version": "4050",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/19pS-WS7ivkkcTeW3mHj8K_u4TVbqSKv1H5s_wscrC60/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/PcBX6tecsTl-gndF8TDnYBKAD0k\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/19pS-WS7ivkkcTeW3mHj8K_u4TVbqSKv1H5s_wscrC60/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0B3SaGp9V25ffSlcxd2djRXdQVlE",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM2MTM4NzM1OTc5OA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0B3SaGp9V25ffSlcxd2djRXdQVlE",
   "webContentLink": "https://docs.google.com/uc?id=0B3SaGp9V25ffSlcxd2djRXdQVlE&export=download",
   "alternateLink": "https://drive.google.com/file/d/0B3SaGp9V25ffSlcxd2djRXdQVlE/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_10_generic_list.png",
   "title": "24Hoursto12Hours.vbs",
   "mimeType": "application/octet-stream",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2013-02-20T19:09:09.889Z",
   "modifiedDate": "2013-02-20T19:09:19.798Z",
   "lastViewedByMeDate": "2013-02-20T19:10:14.291Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "sharedWithMeDate": "2013-02-20T19:09:19.802Z",
   "version": "71254",
   "sharingUser": {
    "kind": "drive#user",
    "displayName": "Javier Velasquez",
    "picture": {
     "url": "https://lh5.googleusercontent.com/-rvBJiuNwqQY/AAAAAAAAAAI/AAAAAAAACEY/pB4I-VGEaFU/s64/photo.jpg"
    },
    "isAuthenticatedUser": false,
    "permissionId": "07438883424589568566",
    "emailAddress": "nycjv321@gmail.com"
   },
   "parents": [],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/mi8njjTmgeak-7cCvVcqYHce0G8\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0B3SaGp9V25ffSlcxd2djRXdQVlE/permissions/me",
    "role": "writer",
    "type": "user"
   },
   "originalFilename": "24Hoursto12Hours.vbs",
   "fileExtension": "vbs",
   "md5Checksum": "75ca21a5637f3659653fea1b6851d08b",
   "fileSize": "1904",
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Javier Velasquez"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Javier Velasquez",
     "picture": {
      "url": "https://lh5.googleusercontent.com/-rvBJiuNwqQY/AAAAAAAAAAI/AAAAAAAACEY/pB4I-VGEaFU/s64/photo.jpg"
     },
     "isAuthenticatedUser": false,
     "permissionId": "07438883424589568566",
     "emailAddress": "nycjv321@gmail.com"
    }
   ],
   "lastModifyingUserName": "Javier Velasquez",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Javier Velasquez",
    "picture": {
     "url": "https://lh5.googleusercontent.com/-rvBJiuNwqQY/AAAAAAAAAAI/AAAAAAAACEY/pB4I-VGEaFU/s64/photo.jpg"
    },
    "isAuthenticatedUser": false,
    "permissionId": "07438883424589568566",
    "emailAddress": "nycjv321@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0B3SaGp9V25ffNlRLZzVOa2tLOHN1MVRlVXlwMDJEWUtKcEtzPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1CYL94Br9zUlg6Yqr3jZkA7aH7isDU3LmK5y8MmmYs-M",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM1NjIzNDAwNTU4OA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1CYL94Br9zUlg6Yqr3jZkA7aH7isDU3LmK5y8MmmYs-M",
   "alternateLink": "https://docs.google.com/document/d/1CYL94Br9zUlg6Yqr3jZkA7aH7isDU3LmK5y8MmmYs-M/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1CYL94Br9zUlg6Yqr3jZkA7aH7isDU3LmK5y8MmmYs-M/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "Untitled document",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2012-12-23T03:37:03.640Z",
   "modifiedDate": "2012-12-23T03:40:05.588Z",
   "modifiedByMeDate": "2012-12-23T03:40:05.588Z",
   "lastViewedByMeDate": "2012-12-23T03:40:05.588Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "1804",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1CYL94Br9zUlg6Yqr3jZkA7aH7isDU3LmK5y8MmmYs-M/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/w4P75CXpvZBKzluYQXyAzmbdnDs\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1CYL94Br9zUlg6Yqr3jZkA7aH7isDU3LmK5y8MmmYs-M/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "0B3SaGp9V25ffT0pZXzRiWlBtNGs",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM0NzYzOTY5OTAwNw\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/0B3SaGp9V25ffT0pZXzRiWlBtNGs",
   "webContentLink": "https://docs.google.com/uc?id=0B3SaGp9V25ffT0pZXzRiWlBtNGs&export=download",
   "alternateLink": "https://drive.google.com/file/d/0B3SaGp9V25ffT0pZXzRiWlBtNGs/view?usp=drivesdk",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_12_pdf_list.png",
   "title": "UNCG-CSC100-Lab4.pdf",
   "mimeType": "application/pdf",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": false,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2012-09-14T16:21:01.451Z",
   "modifiedDate": "2012-09-14T16:21:39.007Z",
   "lastViewedByMeDate": "2012-09-29T02:14:09.876Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "sharedWithMeDate": "2012-09-14T16:21:39.009Z",
   "version": "20363",
   "sharingUser": {
    "kind": "drive#user",
    "displayName": "Javier Velasquez",
    "picture": {
     "url": "https://lh5.googleusercontent.com/-rvBJiuNwqQY/AAAAAAAAAAI/AAAAAAAACEY/pB4I-VGEaFU/s64/photo.jpg"
    },
    "isAuthenticatedUser": false,
    "permissionId": "07438883424589568566",
    "emailAddress": "nycjv321@gmail.com"
   },
   "parents": [],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/4zcKndvTAf65z9fAkoa1h2wlUvc\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/0B3SaGp9V25ffT0pZXzRiWlBtNGs/permissions/me",
    "role": "writer",
    "type": "user"
   },
   "originalFilename": "UNCG-CSC100-Lab4.pdf",
   "fileExtension": "pdf",
   "md5Checksum": "3ab0d4fc2e79ed48751abacebd75a09f",
   "fileSize": "205247",
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Javier Velasquez"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Javier Velasquez",
     "picture": {
      "url": "https://lh5.googleusercontent.com/-rvBJiuNwqQY/AAAAAAAAAAI/AAAAAAAACEY/pB4I-VGEaFU/s64/photo.jpg"
     },
     "isAuthenticatedUser": false,
     "permissionId": "07438883424589568566",
     "emailAddress": "nycjv321@gmail.com"
    }
   ],
   "lastModifyingUserName": "Javier Velasquez",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Javier Velasquez",
    "picture": {
     "url": "https://lh5.googleusercontent.com/-rvBJiuNwqQY/AAAAAAAAAAI/AAAAAAAACEY/pB4I-VGEaFU/s64/photo.jpg"
    },
    "isAuthenticatedUser": false,
    "permissionId": "07438883424589568566",
    "emailAddress": "nycjv321@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": true,
   "explicitlyTrashed": false,
   "appDataContents": false,
   "headRevisionId": "0B3SaGp9V25ffaHNqakFlT1RRcU93bVpTclhOVU5iQ0dDWThNPQ",
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1yD-dE7Ru4Tj-7DW0R92_mLgZAVpXuUr3XNogOpBbGMc",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM0NzMwODQ4OTg4NA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1yD-dE7Ru4Tj-7DW0R92_mLgZAVpXuUr3XNogOpBbGMc",
   "alternateLink": "https://docs.google.com/spreadsheets/d/1yD-dE7Ru4Tj-7DW0R92_mLgZAVpXuUr3XNogOpBbGMc/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/spreadsheets/d/1yD-dE7Ru4Tj-7DW0R92_mLgZAVpXuUr3XNogOpBbGMc/htmlembed",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_spreadsheet_list.png",
   "title": "SAC Run Results 9-6-12",
   "mimeType": "application/vnd.google-apps.spreadsheet",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2012-09-10T20:21:29.884Z",
   "modifiedDate": "2012-09-10T20:21:29.884Z",
   "lastViewedByMeDate": "2012-09-10T20:21:38.947Z",
   "markedViewedByMeDate": "2012-09-10T20:21:38.551Z",
   "version": "3725",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1yD-dE7Ru4Tj-7DW0R92_mLgZAVpXuUr3XNogOpBbGMc/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/6jPILU5L8lPunhAec0uD14uEUis\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1yD-dE7Ru4Tj-7DW0R92_mLgZAVpXuUr3XNogOpBbGMc/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1gNNaWDaPwHObBeaJPxidiJR9p6goRvDc2QkJlUvW2pQ",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTM0Mzc0ODE1NzAzNg\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1gNNaWDaPwHObBeaJPxidiJR9p6goRvDc2QkJlUvW2pQ",
   "alternateLink": "https://docs.google.com/spreadsheets/d/1gNNaWDaPwHObBeaJPxidiJR9p6goRvDc2QkJlUvW2pQ/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/spreadsheets/d/1gNNaWDaPwHObBeaJPxidiJR9p6goRvDc2QkJlUvW2pQ/htmlembed",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_spreadsheet_list.png",
   "title": "Zenergy Timesheet - Template",
   "mimeType": "application/vnd.google-apps.spreadsheet",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2012-07-30T14:46:44.965Z",
   "modifiedDate": "2012-07-31T15:22:37.036Z",
   "modifiedByMeDate": "2012-07-31T15:22:37.036Z",
   "lastViewedByMeDate": "2012-07-31T15:15:19.958Z",
   "markedViewedByMeDate": "2012-07-30T14:46:48.659Z",
   "version": "3661",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1gNNaWDaPwHObBeaJPxidiJR9p6goRvDc2QkJlUvW2pQ/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/xHZ50gOuQDZ6ukaPZOOeKI5H8Dw\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1gNNaWDaPwHObBeaJPxidiJR9p6goRvDc2QkJlUvW2pQ/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1JHSy9dK0tXl28P91GqYhfVW_2J-ynVFrHTFXplz5BFw",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTMyNzUyNDQwOTk4NA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1JHSy9dK0tXl28P91GqYhfVW_2J-ynVFrHTFXplz5BFw",
   "alternateLink": "https://docs.google.com/document/d/1JHSy9dK0tXl28P91GqYhfVW_2J-ynVFrHTFXplz5BFw/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1JHSy9dK0tXl28P91GqYhfVW_2J-ynVFrHTFXplz5BFw/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "无标题文档",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2012-01-25T20:46:49.427Z",
   "modifiedDate": "2012-01-25T20:46:49.984Z",
   "modifiedByMeDate": "2012-01-25T20:46:49.984Z",
   "lastViewedByMeDate": "2012-01-25T20:46:50.092Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "1803",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1JHSy9dK0tXl28P91GqYhfVW_2J-ynVFrHTFXplz5BFw/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/6vwuEo5r202r022BL3eqaX3hZgQ\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1JHSy9dK0tXl28P91GqYhfVW_2J-ynVFrHTFXplz5BFw/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  },
  {
   "kind": "drive#file",
   "id": "1O89V9lbRLl5oTMyGn1BEPt0LJ3eS4KWOJfMy3LUTeaM",
   "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/MTMyMjQ2ODkzOTg3NA\"",
   "selfLink": "https://www.googleapis.com/drive/v2/files/1O89V9lbRLl5oTMyGn1BEPt0LJ3eS4KWOJfMy3LUTeaM",
   "alternateLink": "https://docs.google.com/document/d/1O89V9lbRLl5oTMyGn1BEPt0LJ3eS4KWOJfMy3LUTeaM/edit?usp=drivesdk",
   "embedLink": "https://docs.google.com/document/d/1O89V9lbRLl5oTMyGn1BEPt0LJ3eS4KWOJfMy3LUTeaM/preview",
   "iconLink": "https://ssl.gstatic.com/docs/doclist/images/icon_11_document_list.png",
   "title": "Imported from Google Notebook - My first notebook",
   "mimeType": "application/vnd.google-apps.document",
   "labels": {
    "starred": false,
    "hidden": false,
    "trashed": true,
    "restricted": false,
    "viewed": true
   },
   "createdDate": "2011-11-28T08:28:59.108Z",
   "modifiedDate": "2011-11-28T08:28:59.874Z",
   "modifiedByMeDate": "2011-11-28T08:28:59.874Z",
   "lastViewedByMeDate": "2016-05-12T02:52:57.700Z",
   "markedViewedByMeDate": "1970-01-01T00:00:00.000Z",
   "version": "4055",
   "parents": [
    {
     "kind": "drive#parentReference",
     "id": "0AAq-doVRd1h9Uk9PVA",
     "selfLink": "https://www.googleapis.com/drive/v2/files/1O89V9lbRLl5oTMyGn1BEPt0LJ3eS4KWOJfMy3LUTeaM/parents/0AAq-doVRd1h9Uk9PVA",
     "parentLink": "https://www.googleapis.com/drive/v2/files/0AAq-doVRd1h9Uk9PVA",
     "isRoot": true
    }
   ],
   "userPermission": {
    "kind": "drive#permission",
    "etag": "\"cbitKRmwvXBM7vNu_fbW-IMmy2Q/f475Tgjx3OTb-MP-cuLMgxDO6X8\"",
    "id": "me",
    "selfLink": "https://www.googleapis.com/drive/v2/files/1O89V9lbRLl5oTMyGn1BEPt0LJ3eS4KWOJfMy3LUTeaM/permissions/me",
    "role": "owner",
    "type": "user"
   },
   "quotaBytesUsed": "0",
   "ownerNames": [
    "Trevor MIllner"
   ],
   "owners": [
    {
     "kind": "drive#user",
     "displayName": "Trevor MIllner",
     "isAuthenticatedUser": true,
     "permissionId": "10683930469500558224",
     "emailAddress": "trevormillner@gmail.com"
    }
   ],
   "lastModifyingUserName": "Trevor MIllner",
   "lastModifyingUser": {
    "kind": "drive#user",
    "displayName": "Trevor MIllner",
    "isAuthenticatedUser": true,
    "permissionId": "10683930469500558224",
    "emailAddress": "trevormillner@gmail.com"
   },
   "editable": true,
   "copyable": true,
   "writersCanShare": true,
   "shared": false,
   "explicitlyTrashed": true,
   "appDataContents": false,
   "spaces": [
    "drive"
   ]
  }
 ]
}


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
                "parentFolder": e.parents[0].isRoot ? "ROOT" : e.parents[0].id
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

var queryTerms = ["today", "yesterday", "this week", "last week", "this month"];

controller.hears('files updated (.*)', 'direct_message,direct_mention,mention', function(bot, message) {
    var dateTerm = message.match[1];
    console.log(dateTerm);
    var askFlavor = function(response, convo) {
        var resultScope = invokeGoogleDriveSearch();
        var fileHits = findUpdatedFiles(results, dateTerm);
        var folderHits = findParentFolders(resultScope, fileHits);
        convo.ask("Sure, here's all your folders with updated files today:\n" + 
                folderHits +
                "\nWhich folder would you like to search?", function(response, convo) {
        if (folderHits.find(function(folder) {
            return folder.toLowerCase().search(response.toLowerCase()) !== -1
        }) === undefined) {
            convo.say("Sorry I didn't find that folder")
        }
        else {
            convo.say('Ok');
            listFolderFiles(response, convo);
            convo.next();
        }
        });
    }

    if (queryTerms.find(function(item) {
        return message.toLowerCase().search(item) !== -1;
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


