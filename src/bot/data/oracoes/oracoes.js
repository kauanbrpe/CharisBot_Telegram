const fs = require('fs');

const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

const oracoes = {
    oracaoComunhao: loadPrayer('src/bot/data/oracoes/comunhao/anima-christi.json'),
    oracaoSubTumm: loadPrayer('src/bot/data/oracoes/nossasenhora/sub-tumm-praesidium.json'),
    oracaoConsagracao: loadPrayer('src/bot/data/oracoes/nossasenhora/consagracao-mariana.json'),
    oracaoJosefinaLadainha: loadPrayer('src/bot/data/oracoes/saojose/ladainha-de-saojose.json'),
    oracaoJosefina: loadPrayer('src/bot/data/oracoes/saojose/oracao-de-saojose.json'),
    oracaoJosefinaPapa: loadPrayer('src/bot/data/oracoes/saojose/oracao-papa-para-saojose.json'),
};

module.exports = oracoes;
