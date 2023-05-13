const {Telegraf} = require('telegraf');
const bot = new Telegraf('5670886047:AAGWDSCdXB5RymUBT4x_tIK0rJw1Q1JbOac');

bot.start((ctx)=>{
    ctx.reply("Tesnic Welcomes You . . .\nSent /tesnico to start Tesnico : :");
})
bot.command(["tesnico"],(ctx)=>{
    ctx.reply("Welcome . . . \n I am Tesnico a Telegram Bot developed by Tesnic\n Try /requests to see all availanle commands\nTry /help to get help . . .\n\nTry /documentation to see my documentation and to learn more about me . . .\n\nWish ya a Good day <->");
})

bot.launch();