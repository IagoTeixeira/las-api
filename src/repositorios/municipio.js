const query = require("../infraestrutura/database/queries");

class Municipios {
  listar() {
    const sql = "SELECT nome FROM Municipio";
    return query(sql);
  }
  buscarPorNome(nome) {
    const sql = "SELECT nome FROM Municipio WHERE nome = ?";
    return query(sql, nome);
  }
}

module.exports = new Municipios();
