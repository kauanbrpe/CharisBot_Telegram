const { Markup } = require('telegraf');


const handleStartCommand = (ctx) => {
    const user = ctx.message.from;
    ctx.reply(
        `Olá, ${user.first_name}!😄 \n\n` +
        `Bem-vindo ao CharisBot! \n\n` +
        `Aqui você pode encontrar orações para diferentes momentos do seu dia.\n` +
        `Escolha uma das opções abaixo para começar:\n`,
        Markup.inlineKeyboard([
            [Markup.button.callback('Liturgia do Dia', 'LITURGIA_DIA')],
            [Markup.button.callback('Orações Matutinas', 'ORACAO_DIA')],
            [Markup.button.callback('Orações Marianas', 'MENU_NOSSASENHORA')],
            [Markup.button.callback('Orações Josefinas', 'MENU_SAOJOSE')],
            [Markup.button.callback('Orações Para Comunhão', 'MENU_ORACAO_COMUNHAO')],
            [Markup.button.callback('Sobre Mim', 'SOBRE_MIM')],
        ])
    );
};
module.exports = {
    handleStartCommand,
};

