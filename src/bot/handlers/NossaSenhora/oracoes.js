const sendWithBackButton = require('../../utils/botao-back');
const oracoesNossaSenhora = require('../../data/oracoes/nossasenhora/oracao-nossasenhora');

const handleConsagracao = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.consagracaoMariana.titulo_pt}\n\n${oracoesNossaSenhora.consagracaoMariana.conteudo_pt}`
    );
};

const handleSubTuumPraesidium = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.subTuumPraesidium.titulo_pt}\n\n${oracoesNossaSenhora.subTuumPraesidium.conteudo_pt}`
    );
};

module.exports = {
    handleConsagracao,
    handleSubTuumPraesidium,
};

