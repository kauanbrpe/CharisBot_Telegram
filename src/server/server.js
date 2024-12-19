const express = require('express');

module.exports = () => {
  const app = express();
  const PORT = process.env.PORT || 8080;

  app.get('/', (req, res) => {
    res.send('Servidor funcionando corretamente!');
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escutando na porta ${PORT}`);
  });
};
