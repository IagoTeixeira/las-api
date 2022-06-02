const repositorios = require("../repositorios/ufs");

class Ufs {
  async listar() {
    return repositorios.listar();
  }
}

module.exports = new Ufs();
