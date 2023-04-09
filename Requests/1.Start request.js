const Telegra = require('telegraf');
const bot = new Telegraf('any BOT_TOKEN here');

//When /start is sent
bot.command(["start"],(ctx)=>{
    ctx.reply("Tesnico is sleeping sent /Tesnico to wake Tesnico up...");
})

bot.launch();


/*
How it works : 

first  const Telegra = require('telegraf');   this line imports the telegraf library to our code
and creates a class named Telegraf with all the properties of telegraf library(Note that
in Telegraf 'T' is capital).
(So what is a class:
    
    A class is something that has a lot of properties lie name, type ,values,etc...
    using a class we can store numerous values into a single item at once....
    That is now our class Telegraf has all the properties of the library 'telegraf' 
    that we are using to make the bot.!!!!!!
    No need to bother about that, simply think that Telegraf class is something
    that has all the properties of a telegram bot ...)

in the second line  const bot = new Telegraf('any BOT_TOKEN here');
we create an object bot with its class as Telegraf (the class wejust created in the first line)
now what is its purpose :
Using the bot object we can access any property of the Telegraf class.
For example to read a command we just give bot.command() function where bot is our object
and the command is a property that is defined in the Telegraf object.
That is Command function is a program which is part of telegraf library.It has almost 20 lines of code
and we can use all that 20 line sjust by giving the name commmand()  and we assosciates this command
with the bot object.. This bot object has our bot token .hence when this line is reached 
the program waits for a command to be sent from our bot and when it recieves the command it 
executes all the corresponding codes after the command() function....


now what we have at last is a block named middleware.Every telegram bot codes are a set of different 
middlewares each middleware has a set of instructions whiach are to be executed when specific commands 
are received by the bot...For example in this block or middleware 

bot.command(["start"],(ctx)=>
    {
        ctx.reply("Tesnico is sleeping sent /Tesnico to wake Tesnico up...");
    })   

start command is defined.That is everything inside the curly brackets gets executed whenever /start 
is received by the bot.

now lets see that in detail

bot.command() - It is a function named Command (in java they call these functions methods but no need to
     bother about that).So what is a function a function is a small block of code which we use to write 
     simple programs... In this command() function we write all the processes to be done to read a command 
     and what to do after reading a command .you can see that there is a ''start'' string inside a square 
     bracket...This whatever is inside this square bracket is our command ...(here it is start) and we 
     say it is a string...Because every function reads something and outputs something 
     here what it read ot takes for processing are two things. One is this string or whatever command 
     we are creating(such as start here) and the other is ctx object..So what is a ctx object???
     bot is the object we create during our bot token and having all the feautures of a Telegraf class.
     So if you ask ctx object is the object that is already present in the telegraf library. 
     It contains a lot of details like user information connection status message type etc...
     so ctx makes it easy to reply and access user informations...Here we have ctx.reply() another 
     function.This function helps in senting a reply to the user. Here when we give 
     ctx.reply("Tesnico is sleeping") we actually says that from ctx object access user 
     id message type user information chat Id and sent Tesnico is sleeping to that user with 
     user name xyz, chat id xyz etc.. here the information xyz is present in the ctx object 
     and that is how ctx object makes it simple to handle all these informations and sent this 
     message clearly to the user who sent the bot the request..

     and the last line bot.launch() is a function defined in the telegraf library which activates 
     the bot and enables the code for that bot....


     Thats it all about this first code....


  


*/