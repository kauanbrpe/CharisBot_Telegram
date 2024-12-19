const fs = require('fs');

// Função para carregar oração a partir de um arquivo JSON
const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

// Organizando e renomeando as constantes para um nome mais descritivo
const oracoesMatutinas = {
    consagracaoDoDia: loadPrayer('src/bot/data/oracoes/matutinas/consagracao-do-dia.json'),
};

module.exports = oracoesMatutinas;
