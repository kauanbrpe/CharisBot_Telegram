const sendWithBackButton = require('../../utils/botao-back');
const oracoesNossaSenhora = require('../../data/oracoes/nossasenhora/oracao-nossasenhora');

const handleConsagracao = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.consagracaoMariana.titulo_pt}\n\n${oracoesNossaSenhora.consagracaoMariana.conteudo_pt}`
    );
};

const handleSubTuumPraesidium = (ctx) => {
    sendWithBackButton(
        ctx,
        `${oracoesNossaSenhora.subTuumPraesidium.titulo_pt}\n\n${oracoesNossaSenhora.subTuumPraesidium.conteudo_pt}`
    );
};

const handleMagnificat = (ctx) => {
    // Carregar o objeto Magnificat
    const magnificat = oracoesNossaSenhora.magnificat;
    console.log(magnificat)
    // Formatando a resposta
    const resposta = `
    ${magnificat.titulo_pt}
    
    ${magnificat.conteudo_pt}
    `;

    // Enviar o conteúdo formatado com o botão de voltar
    sendWithBackButton(ctx, resposta);
};

const handleAngelus = (ctx) => {
    // Carregar o objeto Magnificat
    const angelus = oracoesNossaSenhora.angelus;
    // Formatando a resposta
    const resposta = `
    ${angelus.titulo_pt}
    
    ${angelus.conteudo_pt}
    `;

    // Enviar o conteúdo formatado com o botão de voltar
    sendWithBackButton(ctx, resposta);
};


const handleMisteriosDoTerco = (ctx) => {
    // Carregar o objeto completo com os mistérios
    const misterios = oracoesNossaSenhora.misteriosDoTerco;

    // Acessando todos os mistérios
    const gozososDia = misterios.MistériosDoTerço.Gozosos.dia;
    const gozososConteudo = misterios.MistériosDoTerço.Gozosos.conteudo;

    const luminososDia = misterios.MistériosDoTerço.Luminosos.dia;
    const luminososConteudo = misterios.MistériosDoTerço.Luminosos.conteudo;

    const dolorososDia = misterios.MistériosDoTerço.Dolorosos.dia;
    const dolorososConteudo = misterios.MistériosDoTerço.Dolorosos.conteudo;

    const gloriososDia = misterios.MistériosDoTerço.Gloriosos.dia;
    const gloriososConteudo = misterios.MistériosDoTerço.Gloriosos.conteudo;

    const resposta = `
Mistérios do Terço:

Gozosos (Dias: ${gozososDia.join(", ")})
${gozososConteudo.map((conteudo,) => ` ${conteudo}`).join("\n")}

Luminosos (Dia: ${luminososDia.join(", ")})
${luminososConteudo.map((conteudo) => ` ${conteudo}`).join("\n")}

Dolorosos (Dias: ${dolorososDia.join(", ")})
${dolorososConteudo.map((conteudo) => `${conteudo}`).join("\n")}

Gloriosos (Dias: ${gloriososDia.join(", ")})
${gloriososConteudo.map((conteudo) => `${conteudo}`).join("\n")}
`;

    sendWithBackButton(ctx, resposta);
};

module.exports = {
    handleConsagracao,
    handleSubTuumPraesidium,
    handleMisteriosDoTerco,
    handleMagnificat,
    handleAngelus,
};