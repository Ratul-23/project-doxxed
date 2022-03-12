/** LOAD MODULES */

// Interface for HTTP Pipeline
const fetch = require('node-fetch');

// Discord API
const { Client, Intents } = require('discord.js');

// Environmental Variable Library
require('dotenv').config();


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.login(process.env.TOKEN);