const oracoesNossaSenhora = require('../../data/oracoes/nossasenhora/oracao-nossasenhora');
const sendWithBackButton = require('../utils/utils');
const { Markup } = require('telegraf');

// Funções para orações marianas
const handleMenuNossaSenhora = (ctx) => {
    sendWithBackButton(
        ctx,
        'Escolha uma das orações marianas abaixo:',
        [
            [Markup.button.callback('Sub Tuum Praesidium', 'SUB_TUUM_PRAESIDIUM')],
            [Markup.button.callback('Consagração a Nossa Senhora', 'CONSAGRAÇÃO')]
        ]
    );
};

const handleConsagracao = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.consagracaoMariana.titulo_pt}\n\n${oracoesNossaSenhora.consagracaoMariana.conteudo_pt}`,
        []
    );
};

const handleSubTuumPraesidium = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.subTuumPraesidium.titulo_pt}\n\n${oracoesNossaSenhora.subTuumPraesidium.conteudo_pt}\n`,
        []
    );
};

module.exports = {
    handleMenuNossaSenhora,
    handleConsagracao,
    handleSubTuumPraesidium
};
