const { Markup } = require('telegraf');
const sendWithBackButton = require('../../utils/botao-back');

const handleMenuOracaoMatutina = (ctx) => {
    sendWithBackButton(
        ctx,
        'Escolha uma das orações marianas abaixo:',
        [
            [Markup.button.callback('Consagracao do Dia', 'CONSAGRACAO_DO_DIA')],
            [Markup.button.callback('Oferecimento do Dia', 'OFERECIMENTO_DO_DIA')],

        ]
    );
};

module.exports = {
    handleMenuOracaoMatutina,
    
};
