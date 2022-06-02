const ufsMock = require("./ufss.json");

class Ufs {
  listar() {
    return Promise.resolve(ufsMock);
  }
}

module.exports = new Ufs();
