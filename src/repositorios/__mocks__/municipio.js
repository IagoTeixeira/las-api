const municipioMock = require("./municipios.json");

class Municipio {
  listar() {
    return Promise.resolve(municipioMock);
  }
  buscarPorNome(nome) {
    return Promise.resolve(municipioMock.find((elemento) => elemento == nome));
  }
}

module.exports = new Municipio();
