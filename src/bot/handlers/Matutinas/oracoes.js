const sendWithBackButton = require('../../utils/botao-back');
const oracoesMatutinas = require('../../data/oracoes/matutinas/oracao-matutina');

const handleConsagracaoDia = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesMatutinas.consagracaoDoDia.titulo_pt}\n\n${oracoesMatutinas.consagracaoDoDia.conteudo_pt}\n`,
        []
    );
};

module.exports = {
    handleConsagracaoDia,
};

