const oracoesSaoJose = require('../data/oracoes/saoJose/oracao-saojose');
const sendWithBackButton = require('../utils/utils');
const { Markup } = require('telegraf');

// Funções para orações josefinas
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

const handleLadainhaSaoJose = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesSaoJose.ladainhaDeSaoJose.titulo_pt}\n\n${oracoesSaoJose.ladainhaDeSaoJose.conteudo_pt}\n`,
        []
    );
};

const handleOracaoPapaSaoJose = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesSaoJose.oracaoDoPapaParaSaoJose.titulo_pt}\n\n${oracoesSaoJose.oracaoDoPapaParaSaoJose.conteudo_pt}`,
        []
    );
};

const handleOracaoJosefina = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesSaoJose.oracaoDeSaoJose.titulo_pt}\n\n${oracoesSaoJose.oracaoDeSaoJose.conteudo_pt}`,
        []
    );
};

module.exports = {
    handleMenuSaoJose,
    handleLadainhaSaoJose,
    handleOracaoPapaSaoJose,
    handleOracaoJosefina
};
