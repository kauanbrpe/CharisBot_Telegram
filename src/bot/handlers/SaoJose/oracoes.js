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

const handleSeteDomingos = async (ctx) => {
    const oracao = oracoesSaoJose.seteDomingos;

    const sendMessageWithDelay = (message, delay) => {
        return new Promise(resolve => setTimeout(() => {
            ctx.reply(message);
            resolve();
        }, delay));
    };

    for (let i = 0; i < 6; i++) {
        const message = `${oracao[i].titulo_pt}\n\n${oracao[i].conteudo_pt}`;
        await sendMessageWithDelay(message, 1000); // 1000ms = 1 segundo de atraso
    }

    const message7 = `${oracao[6].titulo_pt}\n\n${oracao[6].conteudo_pt}`;
    sendWithBackButton(ctx, message7, []); // Esta linha já envia a mensagem corretamente com o botão
};

module.exports = {
    handleLadainhaSaoJose,
    handleOracaoPapaSaoJose,
    handleOracaoJosefina,
    handleSeteDomingos,
};


