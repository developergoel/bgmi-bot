const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODU1ODg0MTczNzcxNTM4NDYy.YM4-QA.LWKq-1TKGyj0PxDsCJ1Akc9QfyM';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.login(token);