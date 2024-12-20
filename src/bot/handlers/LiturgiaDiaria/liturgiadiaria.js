const { APILiturgiaDiaria } = require('./api-liturgia-diaria');
const { formatPrimeiraLeitura, formatSalmo, formatSegundaLeitura, formatEvangelho } = require('./formatter');
const sendWithBackButton = require('../../utils/botao-back');
const { getDataAtual } = require('./getdata');

const handleLiturgiaDiaria = (ctx) => {
    APILiturgiaDiaria()
        .then(data => {
            const primeiraLeituraMessage = formatPrimeiraLeitura(data.primeiraLeitura);
            const salmoMessage = formatSalmo(data.salmo);
            const segundaLeituraMessage = formatSegundaLeitura(data.segundaLeitura);
            const evangelhoMessage = formatEvangelho(data.evangelho);

            ctx.reply(primeiraLeituraMessage)
                .then(() => ctx.reply(salmoMessage))
                .then(() => sendWithBackButton(ctx, [segundaLeituraMessage]))
                .then(() => sendWithBackButton(ctx, [evangelhoMessage]))
                .catch(error => {
                    sendWithBackButton(ctx, ['Erro ao enviar uma das mensagens']);
                    console.error(error);
                });
        })
        .catch(error => {
            const { dia, mes, ano } = getDataAtual();
            sendWithBackButton(ctx, [
                "Houve um erro ao buscar os dados da liturgia. 😔"
                `No entanto, você pode acessar a liturgia diária diretamente pelo seguinte link:
                [Liturgia Diária]
                https://sagradaliturgia.com.br/liturgia_diaria.php?date=${ano}-${mes}-${dia}
                Agradecemos a compreensão! 🙏`
            ]);
            console.error(error);
        });
        
};

module.exports = { handleLiturgiaDiaria };
