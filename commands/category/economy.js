var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "economy",
    description: "",
    usage: "1) m/economy [module name]\n2) m/feconomy[command (name or alias)]",
    example: "1) m/ec\n2) m/fn\n3) m/ec",
    aliases: ['ec']
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

if(message.content.toLowerCase() === `${prefix}economy`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)

    .setTitle("<a:WA_Money_Moving:918469335821987850> - Economy Commands")
    
    .setThumbnail("https://cdn.discordapp.com/avatars/918463595916976128/64a6be4945bf9089fdb48e7f56b3b1ae.png?size=1024")

    .setDescription (`My Prefix In This Server is <a:settings:908685063330353232> \`${prefix}\``)
    
   .addField(`ㅤ`, `
> <a:WA_Money_Moving:918469335821987850> addmoney
> <a:WA_Money_Moving:918469335821987850> removemoney
> <a:WA_Money_Moving:918469335821987850> balance
> <a:WA_Money_Moving:918469335821987850> beg
> <a:WA_Money_Moving:918469335821987850> buy
> <a:WA_Money_Moving:918469335821987850> daily
> <a:WA_Money_Moving:918469335821987850> weekly
> <a:WA_Money_Moving:918469335821987850> deposit
> <a:WA_Money_Moving:918469335821987850> leaderboard
> <a:WA_Money_Moving:918469335821987850> give
> <a:WA_Money_Moving:918469335821987850> profile
> <a:WA_Money_Moving:918469335821987850> rob
> <a:WA_Money_Moving:918469335821987850> roulette
> <a:WA_Money_Moving:918469335821987850> sell
> <a:WA_Money_Moving:918469335821987850> setbackground
> <a:WA_Money_Moving:918469335821987850> setinfo
> <a:WA_Money_Moving:918469335821987850> slots
> <a:WA_Money_Moving:918469335821987850> shop
> <a:WA_Money_Moving:918469335821987850> withdraw
> <a:WA_Money_Moving:918469335821987850> work`)

    .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}