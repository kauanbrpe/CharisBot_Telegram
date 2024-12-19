const sendWithBackButton = require('../../utils/botao-back');
const oracoesSaoJose = require('../../data/oracoes/saojose/oracao-saojose');


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
    handleLadainhaSaoJose,
    handleOracaoPapaSaoJose,
    handleOracaoJosefina
};


