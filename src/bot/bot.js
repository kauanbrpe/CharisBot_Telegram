const { Telegraf } = require('telegraf');
const { BOT_TOKEN } = process.env; // Carrega o token do arquivo .env
const loadCommands = require('./actions');

// Cria o bot
const bot = new Telegraf(BOT_TOKEN);

// Carrega os comandos e eventos do bot
loadCommands(bot);

// Função para enviar mensagem automática para o canal
function sendAutomaticMessage() {
    const CHANNEL_ID = -1002384781900;  // ou use o chat_id do canal privado
    const message = 'Lembrete: Caderneta - IMIP!';

    bot.telegram.sendMessage(CHANNEL_ID, message)
        .then(() => {
            console.log('Mensagem enviada com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao enviar mensagem automática:', error);
        });
}

// Envia a mensagem automaticamente a cada 1 hora (3600000 ms)
setInterval(sendAutomaticMessage, 3600000);

// Exporte o bot para outros arquivos, se necessário
module.exports = bot;
