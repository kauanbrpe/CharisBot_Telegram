const fs = require('fs');

const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

const oracaoComunhao = {
    animaChristi: loadPrayer('src/bot/data/oracoes/comunhao/anima-christi.json'),
    eismeAqui: loadPrayer('src/bot/data/oracoes/comunhao/eis-me-aqui.json'),
    saoTomasComunhao: loadPrayer('src/bot/data/oracoes/comunhao/oracao-para-comunhao-saotomas.json')
};

module.exports = oracaoComunhao;

