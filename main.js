//Libraries||

    const fs = require('fs');
    const path = require('path');
    const Discord = require('discord.js');
//_________||

//Variables||

    //The bot class
    const client = new Discord.Client();
//_________||


//Start the bot||

    fs.readFile(path.join(__dirname, 'Bot_token.txt'), 'utf8',(err, data) =>{
        if(err)throw err;
        client.login(data); 
    });
//_____________||




