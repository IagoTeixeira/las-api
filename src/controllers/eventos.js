//const Usuarios = require("../models/usuarios");
const Eventos = require("../models/eventos");
module.exports = (app) => {
  app.get("/eventos", (req, res, next) => {
    Eventos.listar()
      .then((eventos) => (eventos ? res.json(eventos) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.get("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.buscarPorId(id)
      .then((eventos) => (eventos ? res.json(eventos) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.get("/eventos/status/:status", (req, res, next) => {
    const status = req.params.status;
    console.log(status);
    Eventos.buscarPorStatus(status)
      .then((eventos) => (eventos ? res.json(eventos) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.post("/eventos", (req, res, next) => {
    const evento = req.body;
    Eventos.adicionar(evento)
      .then((eventos) =>
        eventos ? res.status(201).json(eventos) : res.status(404).send()
      )
      .catch((erro) => next(erro));
  });

  app.put("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Eventos.atualizar(valores, id)
      .then((eventos) => (eventos ? res.json(eventos) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.delete("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.deletar(id)
      .then((eventos) =>
        eventos
          ? res.json({ messsage: "evento deletado com sucesso." })
          : res.status(404).send()
      )
      .catch((erro) => next(erro));
  });
};
