const Discord = require('discord.js');
const fs = require('fs');


const client = new Discord.Client();

const prefix = '-';
var needType;
client.once('ready', () => {
    console.log('Dbot is online');
    });

client.on('message', message => {


    if (message.author.bot && message.author.username!= "Dank Memer") return;
    if(message.content.includes('ahhhhh the fish')){
        needType = message.content.split("Type `");
        message.channel.send(needType[1].slice(0, -1));
        fs.writeFile("log.txt", needType[1].slice(0, -1), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
    if (message.content.includes('Holy fucking shit god')) {
        needType = message.content.split("Type `");
        message.channel.send(needType[1].slice(0,-1));
        fs.writeFile("log.txt", needType[1].slice(0, -1), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
    if(message.content.includes('You cast out your line')){
        message.channel.send('bet')
    }

    if(message.content.includes('lol you suck,')){
        message.channel.send('your bad');
    }


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){substring
       message.channel.send('pong!');
    }

    if (command === 'status'){
        message.channel.send('live');
    }
});

client.login('..');
