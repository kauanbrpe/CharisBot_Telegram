const { Markup } = require('telegraf');

// Função para voltar ao menu principal
const handleVoltar = (ctx) => {
    // Resposta com as opções de menu
    return ctx.reply(
        `Escolha uma das opções abaixo para começar:`,
        Markup.inlineKeyboard([
            [Markup.button.callback('Orações Matutinas', 'ORACAO_DIA')],
            [Markup.button.callback('Orações Marianas', 'ORACAO_MARIANA')],
            [Markup.button.callback('Orações Josefinas', 'ORACAO_JOSEFINA')],
            [Markup.button.callback('Orações Para Comunhão', 'ORACAO_EUCARISTICAS')],
            [Markup.button.callback('Sobre Mim', 'SOBRE_MIM')]
        ])
    );
};

module.exports = handleVoltar;
