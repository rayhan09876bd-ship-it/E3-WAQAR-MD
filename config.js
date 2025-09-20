const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFuR2FVS0tOZjROb2phYUdwZmU1WURObjljVDd3UXA4VVpnUHptRUgzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnVMTVpkd3Y4ZG9oUWlNbTlNK28zcTVqS0Q1Mk40YVRZb1JITUl3SEFHbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RVNjL2xBQkZNTmYwN25FTUFVQ3FGRHk3MkFwSjZpdkZEeWFuUU1hU2t3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPanY5U1kxTDREQXVsTlFwNVZWNjlRY0RSY0hITm9BRURZRWEzeStqcVZRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IbGN1bjdUMFdlVGd3K01Ca1pMRG1rQ2R2bElldDNSTjM1TS80eHU3blk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5qWHZiamsvcFE0cmVXVEtLK0ZIWndtZFY1S3hRTTRpcFh2VGM0WExER3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxvZ3pxSDNNaDgwNkNiZDczQzJLQVV6T3lQdWtrT3NIY2VWVHJmT00xYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1ljTHRkR1JHNmNtaE5WUDZtaHZ6RHhhR0FZS09FR0xlRjQ3am5FUHlWUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNsQXBQL1ZLZzd3VTFaQWZpc1c2NW85UlNUTW1TL1VFd2V5OThqZTRIZmtOd3J3UStwa0gyY3JIaEF4bkk0dUNhUnU5akxXcG5LRWZqUXZEWDFWRkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJsTlNQeWVoTkFPQ1k2dlZwdm1lMVdEazRMVW00QWdXTUJseU9zcnIxTTJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE5MzA1ODg2NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM1NDMxOEYxOEJGNjg5MjdBNUU4RUFENEYxRTA4NkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODM1ODM0M30seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTkzMDU4ODY3NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0VBOEVDRkJENDU4OUFBRUY4NUNGODBCMzM0RjI3MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzU4MzQ0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLSFlBWUhLRCIsIm1lIjp7ImlkIjoiODgwMTkzMDU4ODY3NToxNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2MDAzNTMzMDA5NzMyNzoxNEBsaWQiLCJuYW1lIjoi4o6vzaLijq/ig53wn4y38J2QhPCdkLAn8J2QqyDwnZCX8J2QmvCdkKbwnZCa8J2QouKOryJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWl5OUlrQ0VNSFd1Y1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWXcvWHlpb1lnU3BtVUxDSlFSWG0yU2JhbThPbTBzSlNPeE1EQTZRbXEyaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZkVpM1piNURQV3dyWWNSZG5NTmZiK0xFVkFPZ0JZM2tzakFTeXJoRVREQ1c3MWkvMlRkcGxUdEI1am1DYVBiY0JZczI0TlgzUW5kVkc5S3pOM2dEQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImN1Z2tYd1ZxVHJMYm1TaHdIOHZBbk9oWXg2THJ0NmxEUTR6Ukh1UWdZMTIrUE1QSDJ1RGhNS0xlb2hJZzJHbmRCM2VWV0NYcXR4KzNoQzJuVHBkaEJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiODgwMTkzMDU4ODY3NToxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXTVAxOG9xR0lFcVpsQ3dpVUVWNXRrbTJwdkRwdExDVWpzVEF3T2tKcXRwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgzNTgzNDAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGoyIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-WAQAR-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yoie7u.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3-WAQAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3-WAQAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-WAQAR-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-WAQAR-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yoie7u.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
