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

/*bot.command('limpar', async (ctx) => {
    const chatId = ctx.chat.id; // ID do chat
    const messageId = ctx.message.message_id; // ID da mensagem do comando

    // Apaga a mensagem do comando
    await ctx.deleteMessage(messageId);

    // Mensagem de confirmação temporária
    const confirmMessage = await ctx.reply("Limpando mensagens...");
    setTimeout(() => {
        ctx.deleteMessage(confirmMessage.message_id);
    }, 3000);

    // Obtém as mensagens do chat e tenta apagar
    try {
        const messagesToDelete = 50; // Quantidade de mensagens a apagar
        for (let i = 0; i < messagesToDelete; i++) {
            await ctx.telegram.deleteMessage(chatId, messageId - i);
        }
    } catch (error) {
        console.error("Erro ao apagar mensagens:", error.message);
        await ctx.reply("Não foi possível apagar todas as mensagens. Verifique as permissões do bot.");
    }
});
*/

module.exports = bot;
