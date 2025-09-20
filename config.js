const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01aVmlhL29Dc0FFbW9YL0hPZE94cXJzMnBEOC9ldGNDSm1ZRlRUV0RVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWhxNDFrcUhzaEFyWkh5ZHgyOExnRGFwOWIweEpKd245UG9IVGVyWk5Haz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SXh2ZGtoWTdEZGhFM0ZmazhiQXExTUp3eWJTaDdOSVRRRjI1QUw2M2tjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvckhObnhOSjlCZHNaV2JyRHBDd0ZBc2tPUHBnV0NjdHd5MVRXMFJDZ2p3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPYWJIbjJXOUhKQ0ZVbmR1UkQvb056SjI4LzVYZkU1YlVnVjVKMTNPVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpiSXh5b3FVVzZxWmtFYTljbmtxTkpsUmpKSXpmbldGZnFsOEJ6RENwejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VyYkMzU2pxTDVsY1Z0N3hrZjNwTDB0U3VCV3lUYVM5WTJsLzNoRFJWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWVSVVk0SDZzNktQQ2xzK1hoVlg1YTVWOE5MeDV4d3ZmZWw2WTVZeUVGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVpenZvYmk2Z1BCV01vaml5N3RyTHRYdmlCb0dEN3BWbE5Za3JmaUJlaWNhcXFrb1lPZnd2ZEMxUldwTVRpd0xmaVNGRkE3L2pNUVZIMzd4b0VHdUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJ2SmlTd04rbHZKYTJka2dncHg0d2IzZkhzd0t1RnA2RFZkMFRHQ05DdmV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDEzMjM4MjY1NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUwNjk3MEM5OENFNzY5MEU5OEE2QTAzRDAyNEU1QjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODM1OTkwN30seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTMyMzgyNjU1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUIxMzM5NjkzQTc5MTc2NUNFMkJDOTlGMTgxODc0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzU5OTA3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTMUdOM05IWCIsIm1lIjp7ImlkIjoiODgwMTMyMzgyNjU1MzoxNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJib3QgY29taW5nIHNvb24iLCJsaWQiOiIyNDMzNTkyMjI3MDQzMjoxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09qL3NPc0RFTi9pdWNZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNkMVUzamlyLzhSaDR1SmE1YjBHMUY2R0ZKTUNhVFRhWjcvdUlDTXlEVFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1ocFd1SXBuUGpadVcrVWVsa3JWSXgwdFhROXhmdllqMDRMWTlNRElUZGd3VWdIUEM5OHZPYkFHcG1QUnpYdVFnRE4zUVRGdjNZeXhGOVltWVVmc0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIb3d3ZkR3eHcyN2kxQzZBRXhXWWxaTml0WEwzZjNHTURLaHV1ZDhONng5ZVlEM3l4OEIweGY0WnZaSW5EMU9vSTNnUnFHR2Y3aVNib01UZW5MY3FCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijg4MDEzMjM4MjY1NTM6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkhkVk40NHEvL0VZZUxpV3VXOUJ0UmVoaFNUQW1rMDJtZS83aUFqTWcwMCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MzU5OTA0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx4diJ9",
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
