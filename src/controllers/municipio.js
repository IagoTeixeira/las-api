let Municipio = require("../models/municipio");

module.exports = (app) => {
  app.get("/ufs", (req, res) => {
    Municipio.listar()
      .then((resultados) => {
        resultados ? res.json(resultados) : res.status(404).send();
      })
      .catch(() => {
        res.status(500).end();
      });
  });

  app.get("/ufs/:nome", (req, res) => {
    const nome = req.params.nome;
    Municipio.buscarPorNome(nome)
      .then((resultados) => {
        resultados ? res.json(resultados) : res.status(404).send();
      })
      .catch(() => {
        res.status(500).end();
      });
  });
};
