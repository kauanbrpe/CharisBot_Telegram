const { Telegraf } = require('telegraf');
const { BOT_TOKEN } = process.env; // Carrega o token do arquivo .env
const loadCommands = require('./commands');

// Cria o bot
const bot = new Telegraf(BOT_TOKEN);

// Carrega os comandos e eventos do bot
loadCommands(bot);

module.exports = bot;
