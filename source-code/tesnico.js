/*

  Project started on 16 03 2023
  Bot first activated on 23 03 2023
  
    _________________________________________________________________________________________
    | Initial real source-code of telegram bot tesnico                                                  | |
    | all programs are stored inside this file individual programs commented if not in use | |
    | Main file                                                                            | |
    |______________________________________________________________________________________| |
    \________________________________________________________________________________________|

    command list available :

    Go to bit.ly/tesnico-documentation to know more about tesnico
*/


const Telegraf = require('telegraf');
const BOT_TOKEN=require("./bot-token")
const bot = new Telegraf(BOT_TOKEN);