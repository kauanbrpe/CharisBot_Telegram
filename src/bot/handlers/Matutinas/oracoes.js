const sendWithBackButton = require('../../utils/botao-back');
const oracoesMatutinas = require('../../data/oracoes/matutinas/oracao-matutina');

const handleConsagracaoDia = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesMatutinas.consagracaoDoDia.titulo_pt}\n\n${oracoesMatutinas.consagracaoDoDia.conteudo_pt}\n`,
        []
    );
};


const handleOFerecimentoDia = (ctx) => {
    const oferecimento = oracoesMatutinas.oferecimentoDoDia
    sendWithBackButton(
        ctx,
        `${oferecimento.titulo_pt}\n\n${oferecimento.conteudo_pt}\n`,
        []
    );
};

module.exports = {
    handleConsagracaoDia,
    handleOFerecimentoDia,
};

