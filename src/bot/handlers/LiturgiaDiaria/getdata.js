const getDataAtual = () => {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1; // Mês começa do 0
    const dia = data.getDate();
    return { ano, mes, dia };
};

module.exports = { getDataAtual };
