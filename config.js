const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Loukson/SUHAIL-LMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22502331988";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_13_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInR3VDlHRWQzdzJGd1NhVlNzQzM5UjAzVGVDc2RpMzVEZ0tmbWxyWk9jdkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjREN0Roa3lyUXJha0FGdDJzMWJ6UEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDIwNzhjYWMtNmVkYy00MTViLTg5M2QtMjFlNDVlNmE5N2Y2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTM3LFxuICAgICAgMTE1LFxuICAgICAgMzEsXG4gICAgICAxNTEsXG4gICAgICAxMDIsXG4gICAgICAyNDQsXG4gICAgICAyNCxcbiAgICAgIDEwMixcbiAgICAgIDE2OCxcbiAgICAgIDE4MyxcbiAgICAgIDg4LFxuICAgICAgMjMxLFxuICAgICAgMTE1LFxuICAgICAgNzAsXG4gICAgICA5NyxcbiAgICAgIDE2LFxuICAgICAgMjE5LFxuICAgICAgMjA4LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMjEyLFxuICAgICAgMTEsXG4gICAgICAyMjAsXG4gICAgICAyMTMsXG4gICAgICAxOTgsXG4gICAgICA3MixcbiAgICAgIDIyMSxcbiAgICAgIDY2LFxuICAgICAgMTIyLFxuICAgICAgODEsXG4gICAgICAxMjEsXG4gICAgICAxMjUsXG4gICAgICAxMTcsXG4gICAgICA1OCxcbiAgICAgIDE2NCxcbiAgICAgIDUzLFxuICAgICAgNjQsXG4gICAgICAyNTAsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVg4RTQ4QzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTAyMzMxOTg4Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4LyGyp/htI/htJzhtItz4bSPybQg4bWY4ba74bWY4bWQ4bWD4bWP4oGx4LySXCIsXG4gICAgXCJsaWRcIjogXCIxMjAxMzQ5MzMyMTc5NDo3NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVGN6NG9ERUxtZzhyY0dHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNxU0JJL013MUtYT3VtbW5QWWRQZmQ3K1hCSjNYcHJRSGJ4YkloeHB5WDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibEk1dHRjTWF0WmlyTFljZnkrYWJpdjJlRTVmdFhXTGV4Qk1XRnRRcmd5ZGcxK0ZtTmt6NFVrV0FINlQ2OS9YZ3dJTzFtYXArbEF5YktMWGkvNFpzRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjNyUVhuWWlnKzBQOTU4ekxEM0VESTEwbE9wd1RDT1ArNm44YjNZNlhZeXpKUDdMa2YrTDU0RGlpRDhJWFZ1cEg5YkJpV3lkTlV0eVFxZDZmUUVRZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDIzMzE5ODg6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc4MjgwMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUnNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZScy5qc29uIjogIntcImtleURhdGFcIjpcIjBSQXJRYjQ1NVM2L3JLYjVLVjNCbXV0WEU5MzIxR0ZOZjhURXk4NlArTXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODI3NTg0MDUyLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳ ® 』```", //*『✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname : process.env.BOT_NAME  || "NARUTO-MD",
  ownername:process.env.OWNER_NAME|| "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "NARUTO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
