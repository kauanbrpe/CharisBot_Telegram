const { Markup } = require('telegraf');
const sendWithBackButton = require('../../utils/botao-back');

const handleMenuOracaoComunhao = (ctx) => {
    sendWithBackButton(
        ctx,
        'Escolha uma das orações para comunhão abaixo:',
        [
            [Markup.button.callback('Anima Christi', 'ANIMA_CHRISTI')],
            [Markup.button.callback('Oração a Jesus Crucificado', 'EIS_ME_AQUI')],
            [Markup.button.callback('Oração de São Tomás para Comungar', 'SAO_TOMAS_COMUNHAO')],


        ]
    );
};

module.exports = {
    handleMenuOracaoComunhao,
};
