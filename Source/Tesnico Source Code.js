/*
  Created By : CHRISTO JOHN
  GitHub repo : 
  Instagram page : 
  Project started on 16 03 2023
  Bot first activate/worked on 23 03 2023
    ...______________________________________________________________________________________
    | Primary test file for my tesnico bot                                                 | |
    | all programs are stored inside this file individual programs commented if not in use | |
    | Main file                                                                            | |
    |______________________________________________________________________________________| |
     \_______________________________________________________________________________________|

    command list : /Tesnico  /Requests   /TesInfo
*/

const Telegraf = require('telegraf');
const bot = new Telegraf ('5670886047:AAGWDSCdXB5RymUBT4x_tIK0rJw1Q1JbOac');

//replace bot token with any bots token ---- Am not taking risk publisizing Tesnico's token :))


//on /start

bot.command(["Start","start"],(ctx, next)=>{
  ctx.reply("Tesnico is sleeping: : : Enter /Tesnico to wake him up!!!");

next(ctx);
})
//On /Tesnico
bot.command("Tesnico",(ctx, next)=>{
    ctx.reply("Hey there!\n\nTesnico Welcomes you\nEnter /TesInfo to know about me\nEnter /Requests"
    +" to list all available requests I can accept\n");

next(ctx);
})

//on /Requests
bot.command(["Requests","requests","request","Request"],(ctx, next)=>{
    ctx.reply("Available request options to **Tesnico**\n"
    +"/Tesnico - Wake Tesnico up\n"
    +"/Requests - List all requests (Commands) Tesnico can process\n"
    +"/TesInfo - Know more about Tesnico\n"

    )

next(ctx);
})


//on /TesInfo
bot.command("TesInfo",(ctx, next)=>{
  ctx.reply("Hello,,, Welcome to My Domain ....\nI'm Tesnico a telegram feauture bot. You may have seen and may have"
  +" interacted with a lot of different varieties of telegram bots ;But I'm different...I am not an application based"
  +" bot, rather I'm a feauture bot- meaning I am feauturing each and every telegram bot feautures available- . \n"
  +"My development was started in the summer of 2023 and am now just released .\n"
  +"My current version is 1.0.0 and I can handle three simple requests already - /start,/Requests and /TesInfo\n"
  +"\n\n\n"
  +"More about myself: \n"
  +"Developed by : Christo John\n"
  +"Development started on : 6 03 2023\n"
  +"First release : March 23 2023\n"
  +"Last release : 03 04 2023\n"
  +"Current version : 1.0.0\n"
  +"Created using : Node.js-->Telegraf library\n"
  +"My Source code available at : GitHub repo --> Tesnico\n"
  +"Current Bot level 1/100\n"
  +"online hosting : False\n"
  +"You cant access me for some time as I'm histed locally and am not currently on cloud server and hence you can't access me 24/7\n"
  +"External links :\nInstagram : \nGitHub : \n"

  
  
  )
})



bot.launch();
