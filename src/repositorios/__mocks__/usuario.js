let usuariosMock = require("./usuarios.json");

class Usuarios {
  listar() {
    return Promise.resolve(usuariosMock);
    //bloco 3 -12 minutos
  }

  buscarPorId(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
  }

  adicionar(usuario) {
    return Promise.resolve(usuario);
  }

  async validarNomeUsuarioNaoUtilizado(nome) {
    return Promise.resolve(
      usuariosMock.find((usuario) => usuario.nome === nome)
    );
  }

  alterar(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
  }

  excluir(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }

  buscarPorNome(nome) {
    return Promise.resolve(
      usuariosMock.find((usuario) => usuario.nome === nome)
    );
  }

  listarDadosPessoais(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }

  alterarDadosPessoais(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }
  listarContatos(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }

  alterarContatos(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }

  listarEndereco(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }

  alterarEndereco(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }

  alterarSenha(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }
}

module.exports = new Usuarios();
