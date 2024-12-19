const { Markup } = require('telegraf');

const sendWithBackButton = (ctx, message, buttons = []) => {
    ctx.reply(message, Markup.inlineKeyboard([
        ...buttons,
        [Markup.button.callback('Voltar', 'VOLTAR')],
    ]));
};

module.exports = sendWithBackButton;
