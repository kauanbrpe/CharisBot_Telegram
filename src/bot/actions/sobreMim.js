const sendWithBackButton = require('../utils/utils');

module.exports = (ctx) => {
    sendWithBackButton(
        ctx,
        "Sobre o CharisBot\n\n" +
        "Sou um bot criado com a missão de te ajudar a rezar mais e rezar melhor, " +
        "independente de onde você esteja! \n\n" +
        "Comigo, você pode acessar diversas orações para fortalecer sua fé e " +
        "aproximar-se mais de Deus em qualquer momento do seu dia. \n\n",
        []
    );
};
