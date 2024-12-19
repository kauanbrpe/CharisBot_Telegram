// Importando os módulos necessários
const { Markup } = require('telegraf');
const oracaoComunhao = require('./data/oracoes/comunhao/oracao-comunhao');
const oracoesSaoJose = require('./data/oracoes/saojose/oracao-saojose');
const oracoesNossaSenhora = require('./data/oracoes/nossasenhora/oracao-nossasenhora');

// Função auxiliar para enviar mensagem com botão "Voltar"
const sendWithBackButton = (ctx, message, buttons = []) => {
    ctx.reply(message, Markup.inlineKeyboard([
        ...buttons,
        [Markup.button.callback('Voltar', 'VOLTAR')]
    ]));
};

const handleStartCommand = (ctx) => {
    const user = ctx.message.from;
    ctx.reply(
        `Olá, ${user.first_name}!😄 \n\n` +
        `Bem-vindo ao CharisBot! \n\n` +
        `Aqui você pode encontrar orações para diferentes momentos do seu dia.\n` +
        `Escolha uma das opções abaixo para começar:\n`,
        Markup.inlineKeyboard([
            [Markup.button.callback('Orações Matutinas', 'ORACAO_DIA')],
            [Markup.button.callback('Orações Marianas', 'MENU_NOSSASENHORA')],
            [Markup.button.callback('Orações Josefinas', 'MENU_SAOJOSE')],
            [Markup.button.callback('Orações Para Comunhão', 'ORACAO_EUCARISTICAS')],
            [Markup.button.callback('Sobre Mim', 'SOBRE_MIM')],
        ])
    );
};

const handleSobreMim = (ctx) => {
    sendWithBackButton(
        ctx,
        "Sobre o CharisBot\n\n" +
        "Sou um bot criado com a missão de te ajudar a rezar mais e rezar melhor, " +
        "independente de onde você esteja! \n\n" +
        "Comigo, você pode acessar diversas orações para fortalecer sua fé e " +
        "aproximar-se mais de Deus em qualquer momento do seu dia. \n\n",
        []
    );
};

const handleOracaoEucaristicas = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracaoComunhao.titulo_pt}\n\n${oracaoComunhao.conteudo_pt}\n`,
        []
    );
};

// Funções para orações marianas
const handleMenuNossaSenhora = (ctx) => {
    sendWithBackButton(
        ctx,
        'Escolha uma das orações marianas abaixo:',
        [
            [Markup.button.callback('Sub Tuum Praesidium', 'SUB_TUUM_PRAESIDIUM')],
            [Markup.button.callback('Consagração a Nossa Senhora', 'CONSAGRAÇÃO')]
        ]
    );
};

const handleConsagracao = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.consagracaoMariana.titulo_pt}\n\n${oracoesNossaSenhora.consagracaoMariana.conteudo_pt}`,
        []
    );
};

const handleSubTuumPraesidium = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.subTuumPraesidium.titulo_pt}\n\n${oracoesNossaSenhora.subTuumPraesidium.conteudo_pt}\n`,
        []
    );
};

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

// Função para retornar ao menu principal
const handleVoltar = (ctx) => {
    ctx.reply(
        `Escolha uma das opções abaixo para começar:\n`,
        Markup.inlineKeyboard([
            [Markup.button.callback('Orações Matutinas', 'ORACAO_DIA')],
            [Markup.button.callback('Orações Marianas', 'MENU_NOSSASENHORA')],
            [Markup.button.callback('Orações Josefinas', 'MENU_SAOJOSE')],
            [Markup.button.callback('Orações Para Comunhão', 'ORACAO_EUCARISTICAS')],
            [Markup.button.callback('Sobre Mim', 'SOBRE_MIM')],
        ])
    );
};

module.exports = (bot) => {
    bot.start(handleStartCommand);
    bot.action('SOBRE_MIM', handleSobreMim);
    bot.action('VOLTAR', handleVoltar);
    bot.action('ORACAO_EUCARISTICAS', handleOracaoEucaristicas);
    bot.action('CONSAGRAÇÃO', handleConsagracao);
    bot.action('MENU_NOSSASENHORA', handleMenuNossaSenhora);
    bot.action('MENU_SAOJOSE', handleMenuSaoJose);
    bot.action('LADAINHA', handleLadainhaSaoJose);
    bot.action('ORACAO_PAPA_TO_SJOSE', handleOracaoPapaSaoJose);
    bot.action('SUB_TUUM_PRAESIDIUM', handleSubTuumPraesidium);
    bot.action('ORACAO_JOSEFINA', handleOracaoJosefina);
};
