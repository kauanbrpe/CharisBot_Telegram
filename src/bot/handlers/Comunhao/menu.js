const { Markup } = require('telegraf');
const sendWithBackButton = require('../../utils/botao-back');

const handleMenuOracaoComunhao = (ctx) => {
    sendWithBackButton(
        ctx,
        'Escolha uma das orações marianas abaixo:',
        [
            [Markup.button.callback('Anima Christi', 'ANIMA_CHRISTI')],
        ]
    );
};

module.exports = {
    handleMenuOracaoComunhao,
};
