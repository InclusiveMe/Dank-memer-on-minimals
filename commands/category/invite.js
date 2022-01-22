var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "invite",
    description: "invite link of bot",
    usage: "1) m/invite \n2) m/inv",
    aliases: ['i']
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

if(message.content.toLowerCase() === `${prefix}invite`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dcf104`)
    .setAuthor(`${bot.user.username} bot`)
      .setThumbnail(bot.user.displayAvatarURL())   
    .setDescription(`<:Hashtag:918323313888075796> - [Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=918463595916976128&permissions=533851405377&scope=bot)\n<:Hashtag:918323313888075796> - [Support Server](https://discord.gg/vCYjsSdyhZ)`,true)

message.channel.send(log);
}
}
}