const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!')
});

/**
 * const Discord = require("discord.js");
 * const client = new Discord.Client();
 * 
 * client.on("ready", () => {
 *   console.log('Logged in as ${client.user.tag}!')
 * })
 */
