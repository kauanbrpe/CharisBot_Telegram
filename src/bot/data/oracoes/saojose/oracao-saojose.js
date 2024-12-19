const fs = require('fs');

const loadPrayer = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

const oracoesSaoJose = {
    oracaoDeSaoJose: loadPrayer('src/bot/data/oracoes/saojose/oracao-de-saojose.json'),
    oracaoDoPapaParaSaoJose: loadPrayer('src/bot/data/oracoes/saojose/oracao-papa-para-saojose.json'),
    ladainhaDeSaoJose: loadPrayer('src/bot/data/oracoes/saojose/ladainha-de-saojose.json'),
};

module.exports = oracoesSaoJose;
