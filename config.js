const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xqH1G5WtVVg6iIl/YGokydByQBI5AgCQp2+e9TtN3V/TCnp+ctlcvaK2utvV8BoZihKapA7xVkOb74HNVLXmUI9EC/CEOUgyaAPvdBDyDrCIMWd9bGTRJ0NrlgbxuW0rTsGrPJkdOR1sqWmUr1tvoM7k2QFYcEB98AUrgRyu11qLayau/wzmVMp7K4pe7LLB2HZB2TxmK6DDNnpD+De43o4xyTaJgdUYpyP5miaunj/Gf0rXk39NyBJs2HVWJh4wBv6HAjkaVcD97WKY2JSSJzvr+l0c/oz4OiGqZK4MZ25a2l+OBivqKmdjvOtHw1mbFztUp97IYn9UGf4YggaEFEOObVj3VPB9rATvroqJ8lcaEZCSdnbSVcduZ6VFUQ6Za+nnmyuCTznxFfSbQy7OLkxC9k2i82bNzYNqr5aDLaoBVt3TrYOvmZN/TK4Vfiy/wjK/H/0V2ctNlFGKtzubPFdJE7cDHIOxZpLwqH3txsk1FtIpEZGw1/Rt+Oq8mpcabuRV3cuCdPInM93LbDcD+fK5qdtgzaiCOCSzP4pO/zIv+OZXS5nMu+2pWLW5xlii7DhThre7zRJk6rux9r6Ozprl6Mg0PUSPMRPOyKflImM13czE3NWW37kpAvCrsftqL4yvfRanuKnt9+FKPKgqDXvjdBjiLMeO5zTEm9J2tN4MPLBgU54m/qgvVOO1TnSOKDnTjebiuytwp3wwych+kymmts6Tb6cMks6jyDJshyGiDGEBxjxmlezRFjfoQY6P39uwkIKvnDt7pat90EIc4Zd0iRJdSHH6Z+HPpBQAvCNxUJjHqBctATPrcR55hErJaxIH4eHPEFGUefM9AL/YShexNAdMEBqvHA2pP1q3+9rb0KntaE4oW+6F5rykdKHld8uStLqgafJF+Wn0QFCk/qoSM9BW3/IGttTZK6XdAE+L1l6jd/dDCAC447xf4Wwim5iWYhrBfcCsLEtN5ceEiPcgRBj+cFaoKDH8RFZtMYkW9whZN67FM3SiczNogkhWvyUHOq5bGx/4L7sBT0Xj/HlEFhjdd9GWymblsHTZC+JRDXP+9IoiJ0FU2VJKnXlv9iv661kH6W/SKI17jvotcvIOI+ThjoAWPamrcndDBcjs/XuW6auhrpRlSDf5j0EfZHmmaj0OjsAiUVbDbZjaq0Q5N0d1AXS7goT5uN6jWkarg+6fbq+V9AQA9IS5UGk5itBqeRchJkWKFIrxJZEk1btaX4WpW6wQ9T5viubRXs4lbhZCWyF3Ov5nx3bfOBeYYidkcv2upAFZ2EunF9rqs9wvK1mLIkY4HtHJb3b5QrsXWyYcstA0HZ6fb+Mg/cq371EmFjwcAtDUfZQKkvGOi8Ok8dbRe2utBz+uugoZSxrVIFV65yWj3a8G0MJO/jF791yOt7tEKM3qYZ8WuL/sucrykX7s0vGO/z8Q9J6m/K3ZUn3YXEh4qxLYOMnyde0mkNTl2b7YX4YoZFcBzur0MB3O+/myBLfB7SPK1bhcCcYgiaIPEZ1z8b1cYpYtxPM9BrK6Kkah2lK97/AUSLCUbdBwAA",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,🥶,🌡️,🌻,😻,🌹,🥳,💪,😎,🌼,🫶,😂,🤡",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254703798555",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ B.M.B-XMD ✦ XMD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ B.M.B-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p9hyal.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">B.M.B IS ACTIVE AND ALIVE\n\n\nKEEP USING B.M.B-XMD FROM B.M.B TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by victor sterling🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
