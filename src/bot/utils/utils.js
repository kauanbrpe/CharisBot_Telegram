const { Markup } = require('telegraf');

module.exports = (ctx, message, buttons = []) => {
    ctx.reply(message, Markup.inlineKeyboard([
        ...buttons,
        [Markup.button.callback('Voltar', 'VOLTAR')]
    ]));
};
