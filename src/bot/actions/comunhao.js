const oracaoComunhao = require('../data/oracoes/comunhao/oracao-comunhao');
const sendWithBackButton = require('../utils/utils');
const { Markup } = require('telegraf');

// Função para orações de Comunhão
const handleOracaoEucaristicas = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracaoComunhao.animaChristi.titulo_pt}\n\n${oracaoComunhao.animaChristi.conteudo_pt}\n`,
        []
    );
};

module.exports = handleOracaoEucaristicas;
