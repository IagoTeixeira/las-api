const Usuarios = require("../models/usuarios");

module.exports = (app) => {
  app.get("/usuarios", (req, res, next) => {
    Usuarios.listar()
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.get("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarPorId(id)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.post("/usuarios", (req, res, next) => {
    const usuarios = req.body;
    Usuarios.adicionar(usuarios)
      .then((usuario) => res.status(201).json(usuario))
      .catch((erro) => next(erro));
  });

  app.put("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterar(id, valores)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.delete("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.excluir(id)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.get("/usuarios/nome/:nome", (req, res, next) => {
    const nome = req.params.nome;
    Usuarios.buscarPorNome(nome)
      .then((usuario) => res.json(usuario))
      .catch((erro) => next(erro));
  });

  //DADOS PESSOAIS
  app.get("/usuarios/:id/dados-pessoais", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.listarDadosPessoais(id)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  app.put("/usuarios/:id/dados-pessoais", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarDadosPessoais(id, valores)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  //Contatos
  app.get("/usuarios/:id/contatos", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.listarContatos(id)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });
  app.put("/usuarios/:id/contatos", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarContatos(id, valores)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  //Endereço
  app.get("/usuarios/:id/endereco", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.listarEndereco(id)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });
  app.put("/usuarios/:id/endereco", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarEndereco(id, valores)
      .then((usuario) => (usuario ? res.json(usuario) : res.status(404).send()))
      .catch((erro) => next(erro));
  });

  //Senha
  app.put("/usuarios/:id/senha", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarSenha(id, valores)
      .then(() => res.json({ message: "senha alterada com sucesso." }))
      .catch((erro) => next(erro));
  });
};
