const { Markup } = require('telegraf');
const sendWithBackButton = require('../../utils/botao-back');

const handleMenuSaoJose = (ctx) => {
    sendWithBackButton(
        ctx,
        'Escolha uma das orações josefinas abaixo:',
        [
            [Markup.button.callback('Ladainha de São José', 'LADAINHA')],
            [Markup.button.callback('Oração do Papa para São José', 'ORACAO_PAPA_TO_SJOSE')],
            [Markup.button.callback('Oração de São José', 'ORACAO_JOSEFINA')]
        ]
    );
};

module.exports = {
    handleMenuSaoJose,
};

