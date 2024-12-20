const axios = require('axios');
const { getDataAtual } = require('./getdata');

const APILiturgiaDiaria = () => {
    const { dia, mes, ano } = getDataAtual();
    return axios.get(`https://liturgia.up.railway.app/?dia=${dia}&mes=${mes}&ano=${ano}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Erro ao consumir a API:', error);
            throw new Error('Esses dados estão indisponíveis no momento');
        });
};

module.exports = { APILiturgiaDiaria };
