const oracaoComunhao = require('../data/oracoes/comunhao/oracao-comunhao');
const oracoesSaoJose = require('../data/oracoes/saoJose/oracao-saojose');
const oracoesNossaSenhora = require('../data/oracoes/nossaSenhora/oracao-nossasenhora');
const sendWithBackButton = require('../utils/utils');
const { Markup } = require('telegraf');

module.exports = {
    handleOracaoEucaristicas: (ctx) => {
        sendWithBackButton(
            ctx,
            `${oracaoComunhao.titulo_pt}\n\n${oracaoComunhao.conteudo_pt}\n`,
            []
        );
    },
    handleMenuNossaSenhora: (ctx) => {
        sendWithBackButton(
            ctx,
            'Escolha uma das orações marianas abaixo:',
            [
                [Markup.button.callback('Sub Tuum Praesidium', 'SUB_TUUM_PRAESIDIUM')],
                [Markup.button.callback('Consagração a Nossa Senhora', 'CONSAGRAÇÃO')]
            ]
        );
    },
    handleMenuSaoJose: (ctx) => {
        sendWithBackButton(
            ctx,
            'Escolha uma das orações josefinas abaixo:',
            [
                [Markup.button.callback('Ladainha de São José', 'LADAINHA')],
                [Markup.button.callback('Oração do Papa para São José', 'ORACAO_PAPA_TO_SJOSE')],
                [Markup.button.callback('Oração de São José', 'ORACAO_JOSEFINA')]
            ]
        );
    }
};
