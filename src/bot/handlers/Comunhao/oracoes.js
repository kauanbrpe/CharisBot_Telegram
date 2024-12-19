const sendWithBackButton = require('../../utils/botao-back');
const oracaoComunhao = require('../../data/oracoes/comunhao/oracao-comunhao');

const handleAnimaChristi = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracaoComunhao.animaChristi.titulo_pt}\n\n${oracaoComunhao.animaChristi.conteudo_pt}\n
        \n\n${oracaoComunhao.animaChristi.conteudo_la}\n`+

        []
    );
};

module.exports = {
    handleAnimaChristi,
};

