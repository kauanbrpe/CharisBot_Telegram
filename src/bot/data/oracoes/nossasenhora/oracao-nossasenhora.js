const fs = require('fs');

const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

const oracoesNossaSenhora = {
    consagracaoMariana: loadPrayer('src/bot/data/oracoes/nossasenhora/consagracao-mariana.json'),
    subTuumPraesidium: loadPrayer('src/bot/data/oracoes/nossasenhora/sub-tumm-praesidium.json'),
    misteriosDoTerco: loadPrayer('src/bot/data/oracoes/nossasenhora/misterios-do-terco.json'),
    magnificat: loadPrayer('src/bot/data/oracoes/nossasenhora/magnificat.json'),
    angelus: loadPrayer('src/bot/data/oracoes/nossasenhora/angelus.json')
};


module.exports = oracoesNossaSenhora;
