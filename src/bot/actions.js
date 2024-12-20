const { handleMenuNossaSenhora } = require('./handlers/NossaSenhora/menu');
const { handleConsagracao, handleSubTuumPraesidium , handleMisteriosDoTerco, handleMagnificat, handleAngelus } = require('./handlers/NossaSenhora/oracoes');
const { handleMenuSaoJose } = require('./handlers/SaoJose/menu')
const { handleMenuOracaoComunhao } = require('./handlers/Comunhao/menu')
const { handleLadainhaSaoJose, handleOracaoJosefina, handleOracaoPapaSaoJose } = require('./handlers/SaoJose/oracoes')
const { handleSobreMim } = require('./handlers/SobreMim/sobremim')
const { handleAnimaChristi } = require('./handlers/Comunhao/oracoes')
const {handleMenuOracaoMatutina} = require ('./handlers/Matutinas/menu');
const { handleConsagracaoDia, handleOFerecimentoDia } = require('./handlers/Matutinas/oracoes');
const { handleVoltar } = require ('./handlers/Voltar/voltar')
const { handleStartCommand } = require('./handlers/Start/Start')
const { handleDefault } = require('./handlers/Default/Default');
const {handleLiturgiaDiaria} = require ('./handlers/LiturgiaDiaria/liturgiadiaria')

module.exports = (bot) => {
    bot.start(handleStartCommand);
    bot.action('SOBRE_MIM', handleSobreMim);
    bot.action('LITURGIA_DIA',handleLiturgiaDiaria)
    bot.action('VOLTAR', handleVoltar);
    bot.on('text', handleDefault);
    bot.action('ORACAO_DIA', handleMenuOracaoMatutina)
    bot.action('CONSAGRACAO_DO_DIA',handleConsagracaoDia)
    bot.action('ANIMA_CHRISTI', handleAnimaChristi);
    bot.action('CONSAGRACAO', handleConsagracao);
    bot.action('MENU_ORACAO_COMUNHAO',handleMenuOracaoComunhao)
    bot.action('MENU_NOSSASENHORA', handleMenuNossaSenhora);
    bot.action('MENU_SAOJOSE', handleMenuSaoJose);
    bot.action('LADAINHA', handleLadainhaSaoJose);
    bot.action('ANGELUS',handleAngelus);
    bot.action("OFERECIMENTO_DO_DIA",handleOFerecimentoDia)
    bot.action('ORACAO_PAPA_TO_SJOSE', handleOracaoPapaSaoJose);
    bot.action('ORACAO_JOSEFINA', handleOracaoJosefina);
    bot.action('SUB_TUUM_PRAESIDIUM', handleSubTuumPraesidium);
    bot.action('MISTERIOS_DO_TERCO', handleMisteriosDoTerco); 
    bot.action('MAGNIFICAT', handleMagnificat);

};
