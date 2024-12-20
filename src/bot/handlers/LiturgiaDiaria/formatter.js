const formatPrimeiraLeitura = (primeiraLeitura) => `
Primeira Leitura:
${primeiraLeitura.texto}
`;

const formatSalmo = (salmo) => `
Salmo:
${salmo.texto}
`;

const formatSegundaLeitura = (segundaLeitura) => `
Segunda Leitura:
${segundaLeitura ? segundaLeitura : 'Não há segunda leitura hoje!'}
`;

const formatEvangelho = (evangelho) => `
Evangelho:
${evangelho.texto}
`;

module.exports = {
    formatPrimeiraLeitura,
    formatSalmo,
    formatSegundaLeitura,
    formatEvangelho
};
