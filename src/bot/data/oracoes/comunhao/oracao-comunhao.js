const fs = require('fs');

const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

// Melhorando o nome da chave para algo mais descritivo
const oracaoComunhao = {
    animaChristi: loadPrayer('src/bot/data/oracoes/comunhao/anima-christi.json'),
};

module.exports = oracaoComunhao;
