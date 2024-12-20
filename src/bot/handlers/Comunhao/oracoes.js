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

const handleEisMeAqui = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracaoComunhao.eismeAqui.titulo_pt}\n\n${oracaoComunhao.eismeAqui.conteudo_pt}\n`+

        []

    )
}

const handleSaoTomasComunhao = (ctx) => {

    sendWithBackButton(
        ctx,
        `${oracaoComunhao.saoTomasComunhao.titulo_pt}\n\n${oracaoComunhao.saoTomasComunhao.conteudo_pt}\n`
        +
        []
    )
}


module.exports = {
    handleAnimaChristi,
    handleEisMeAqui,
    handleSaoTomasComunhao,
};

