const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');
let inv = require('../../schemas/inv')
let shop = require('../../economy/shop')

module.exports = {
    name: 'delete-inv',
    category: "owner",
    description: 'delete users inventory',
    usage: '?delete-inv [member]',
    aliases: ['reset-inv'],
    timeout: 0,
  developersOnly: true,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {

    

    let member = message.mentions.members.first() || message.member;

    let inventory;
    try {
      inventory = await inv.findOneAndDelete({
        User: member.id
      })
    } catch (e) {
      console.error(e)
    }
    message.channel.send("inv deleted")
    }
}