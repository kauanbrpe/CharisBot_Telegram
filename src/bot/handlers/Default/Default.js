const { Markup } = require('telegraf');

const handleDefault = async (ctx) => {
    const user = ctx.message.from; // Captura os dados do usuário
    const mensagem = ctx.message.text; // Captura a mensagem enviada pelo usuário

    console.log(`Mensagem recebida de ${user.first_name} (@${user.username}): ${mensagem}`);

    // Responde ao usuário com as opções
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

module.exports = { handleDefault };
