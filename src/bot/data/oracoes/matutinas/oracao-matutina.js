const fs = require('fs');

// Função para carregar oração a partir de um arquivo JSON
const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

// Organizando e renomeando as constantes para um nome mais descritivo
const oracoesNossaSenhora = {
    consagracaoDoDia: loadPrayer('src/bot/data/oracoes/nossasenhora/consagracao-do-dia.json'),
};

module.exports = oracoesNossaSenhora;
