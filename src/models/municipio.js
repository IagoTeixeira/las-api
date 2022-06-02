const repositorios = require("../repositorios/municipio");

class Municipio {
  async listar() {
    return repositorios.listar();
  }
  buscarPorNome(nome) {
    return repositorios.buscarPorNome(nome);
  }
}

module.exports = new Municipio();
