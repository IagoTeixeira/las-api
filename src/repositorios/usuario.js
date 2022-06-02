const executaQuery = require("../infraestrutura/database/queries");

class Usuarios {
  listar() {
    const sql = "SELECT id, nome, urlFoto FROM Usuarios";
    return executaQuery(sql);
  }

  buscarPorId(id) {
    const sql = "SELECT id, nome, urlFoto FROM Usuarios WHERE id = ?";
    return executaQuery(sql, id).then((elemento) => elemento[0]);
  }

  adicionar(usuario) {
    const sql = "INSERT INTO Usuarios SET ?";
    return executaQuery(sql, usuario);
  }

  async validarNomeUsuarioNaoUtilizado(nome) {
    const sql = "SELECT id, nome, urlFoto FROM Usuarios WHERE nome = ?";
    return executaQuery(sql, nome);
  }

  alterar(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return executaQuery(sql, [valores, id]);
  }

  excluir(id) {
    const sql = "DELETE FROM Usuarios WHERE id = ?";
    return executaQuery(sql, id);
  }

  buscarPorNome(nome) {
    const sql = "SELECT id, nome, urlFoto FROM Usuarios WHERE nome like ?";
    return executaQuery(sql, nome).then((elemento) => elemento[0]);
  }

  listarDadosPessoais(id) {
    const sql =
      "SELECT nomeCompleto, dataNascimento, rg, cpf FROM Usuarios WHERE id = ?";
    return executaQuery(sql, id).then((elemento) => elemento[0]);
  }

  alterarDadosPessoais(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return executaQuery(sql, [valores, id]);
  }

  listarContatos(id) {
    const sql = "SELECT telefone, celular, email FROM Usuarios WHERE id = ?";
    return executaQuery(sql, id).then((elemento) => elemento[0]);
  }

  alterarContatos(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return executaQuery(sql, [valores, id]);
  }

  listarEndereco(id) {
    const sql =
      "SELECT cep, endereco, numero, complemento, bairro FROM Usuarios WHERE id = ?";
    return executaQuery(sql, id).then((elemento) => elemento[0]);
  }

  alterarEndereco(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return executaQuery(sql, [valores, id]);
  }

  alterarSenha(id, valores) {
    const sql = "UPDATE Usuarios SET ? WHERE id = ?";
    return executaQuery(sql, [valores, id]);
  }
}

module.exports = new Usuarios();
