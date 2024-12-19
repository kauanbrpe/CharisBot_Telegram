require('dotenv').config();
const { Telegraf } = require('telegraf');
const server = require('./src/server/server'); // Importação do servidor
const bot = require('./src/bot/bot'); // Bot já configurado

// Inicia o servidor
server();

// Inicia o bot
bot.launch()
  .then(() => console.log('Bot iniciado com sucesso!'))
  .catch(err => console.error('Erro ao iniciar o bot:', err));
