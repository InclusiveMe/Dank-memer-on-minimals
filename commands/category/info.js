var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "info",
    description: ".",
    usage: "1) m/info [module name]\n2) m/info[command (name or alias)]",
    example: "1) m/r\n2) m/r\n3) m/r",
    aliases: ['if']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}info`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("♨ - Info's commands panel")
    
    .setThumbnail("https://cdn.discordapp.com/avatars/918463595916976128/64a6be4945bf9089fdb48e7f56b3b1ae.png?size=1024")

    .setDescription (`My Prefix In This Server is \`${prefix}\``)
    
   .addField(`ㅤ`, `
> <:Hashtag:918323313888075796> help
> <:Hashtag:918323313888075796> botinfo
> <:Hashtag:918323313888075796> invite`)

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}

