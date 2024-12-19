const fs = require('fs');

const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

// Melhorando os nomes das constantes e corrigindo a duplicidade
const oracoesNossaSenhora = {
    consagracaoMariana: loadPrayer('src/bot/data/oracoes/nossasenhora/consagracao-mariana.json'),
    subTuumPraesidium: loadPrayer('src/bot/data/oracoes/nossasenhora/sub-tumm-praesidium.json'),
};

module.exports = oracoesNossaSenhora;
