//This file contains the code for /Tesnico command which is used to wake tesnico up or rather start tesnico*/

const Telegraf = require('telegraf');
const bot = new Telegraf('ant BOT_TOKEN here');


//variables here

ts=0;
//When a user sent /Tesnico
bot.command(["Tesnico"],(ctx)=>
{
    ts=1;
    ctx.reply("ts ="+ts);
    ctx.reply("Hey there!\n\nTesnico Welcomes you...\nEnter /TesInfo to know about me...\nEnter /Requests"
    +" to list all available requests I can process\n");
})

bot.launch();