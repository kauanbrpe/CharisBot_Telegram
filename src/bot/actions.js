const { handleMenuNossaSenhora } = require('./handlers/NossaSenhora/menu');
const { handleConsagracao, handleSubTuumPraesidium, handleMisteriosDoTerco, handleMagnificat, handleAngelus } = require('./handlers/NossaSenhora/oracoes');

const { handleMenuSaoJose } = require('./handlers/SaoJose/menu');
const { handleLadainhaSaoJose, handleOracaoJosefina, handleOracaoPapaSaoJose, handleSeteDomingos } = require('./handlers/SaoJose/oracoes');

const { handleMenuOracaoComunhao } = require('./handlers/Comunhao/menu');
const { handleAnimaChristi, handleEisMeAqui, handleSaoTomasComunhao } = require('./handlers/Comunhao/oracoes');

const { handleMenuOracaoMatutina } = require('./handlers/Matutinas/menu');
const { handleConsagracaoDia, handleOFerecimentoDia } = require('./handlers/Matutinas/oracoes');

const { handleSobreMim } = require('./handlers/SobreMim/sobremim');
const { handleLiturgiaDiaria } = require('./handlers/LiturgiaDiaria/liturgiadiaria');

const { handleStartCommand } = require('./handlers/Start/Start');
const { handleDefault } = require('./handlers/Default/Default');
const { handleVoltar } = require('./handlers/Voltar/voltar');

module.exports = (bot) => {
    // Comando inicial
    bot.start(handleStartCommand);

    // Sessão: Informações gerais
    bot.action('SOBRE_MIM', handleSobreMim);
    bot.action('LITURGIA_DIA', handleLiturgiaDiaria);
    bot.action('VOLTAR', handleVoltar);
    bot.on('text', handleDefault);

    // Sessão: Orações Matutinas
    bot.action('ORACAO_DIA', handleMenuOracaoMatutina);
    bot.action('CONSAGRACAO_DO_DIA', handleConsagracaoDia);
    bot.action('OFERECIMENTO_DO_DIA', handleOFerecimentoDia);

    // Sessão: Orações Marianas (Nossa Senhora)
    bot.action('MENU_NOSSASENHORA', handleMenuNossaSenhora);
    bot.action('CONSAGRACAO', handleConsagracao);
    bot.action('SUB_TUUM_PRAESIDIUM', handleSubTuumPraesidium);
    bot.action('MISTERIOS_DO_TERCO', handleMisteriosDoTerco);
    bot.action('MAGNIFICAT', handleMagnificat);
    bot.action('ANGELUS', handleAngelus);

    // Sessão: Orações Josefina (São José)
    bot.action('MENU_SAOJOSE', handleMenuSaoJose);
    bot.action('LADAINHA', handleLadainhaSaoJose);
    bot.action('ORACAO_JOSEFINA', handleOracaoJosefina);
    bot.action('ORACAO_PAPA_TO_SJOSE', handleOracaoPapaSaoJose);
    bot.action('SETE_DOMINGOS', handleSeteDomingos)

    // Sessão: Orações de Comunhão
    bot.action('MENU_ORACAO_COMUNHAO', handleMenuOracaoComunhao);
    bot.action('ANIMA_CHRISTI', handleAnimaChristi);
    bot.action('EIS_ME_AQUI', handleEisMeAqui);
    bot.action('SAO_TOMAS_COMUNHAO', handleSaoTomasComunhao)
};
