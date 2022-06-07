const executaQuery = require("../infraestrutura/database/queries");

class Ufs {
  listar() {
    const sql = "SELECT * FROM ufs";
    return executaQuery(sql);
  }
}

module.exports = new Ufs();
