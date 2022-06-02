const Ufs = require("../models/ufs");

module.exports = (app) => {
  app.get("/uf-estados", (req, res, next) => {
    Ufs.listar()
      .then((ufs) => res.status(200).json(ufs))
      .catch((erro) => next(erro));
  });
};
