const { Markup } = require('telegraf');
const sendWithBackButton = require('../../utils/botao-back');

const handleMenuNossaSenhora = (ctx) => {
    sendWithBackButton(
        ctx,
        'Escolha uma das orações marianas abaixo:',
        [
            [Markup.button.callback('Sub Tuum Praesidium', 'SUB_TUUM_PRAESIDIUM')],
            [Markup.button.callback('Consagração a Nossa Senhora', 'CONSAGRACAO')],
            [Markup.button.callback('Mistérios do Terço', 'MISTERIOS_DO_TERCO')],
            [Markup.button.callback('Magnificat', 'MAGNIFICAT')],
            [Markup.button.callback('Angelus', 'ANGELUS')]



        ]
    );
};

module.exports = {
    handleMenuNossaSenhora,
};
