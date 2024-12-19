const { Markup } = require('telegraf');

const handleVoltar = (ctx) => {
    ctx.reply(
        `Escolha uma das opções abaixo para começar:\n`,
        Markup.inlineKeyboard([
            [Markup.button.callback('Orações Matutinas', 'ORACAO_DIA')],
            [Markup.button.callback('Orações Marianas', 'MENU_NOSSASENHORA')],
            [Markup.button.callback('Orações Josefinas', 'MENU_SAOJOSE')],
            [Markup.button.callback('Orações Para Comunhão', 'MENU_ORACAO_COMUNHAO')],
            [Markup.button.callback('Sobre Mim', 'SOBRE_MIM')],
        ])
    );
};

module.exports = {
    handleVoltar,
};

