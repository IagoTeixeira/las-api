class Tabelas {
  init(pool) {
    this.pool = pool;

    this.criarUsuarios();
    this.criarEventos();
    this.criarTiposVendas();
    this.criarUFs();
    this.criarMunicipio();
  }
  criarEventos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Eventos(id INT AUTO_INCREMENT NOT NULL, nome varchar(100) NOT NULL, descricao varchar(100) NOT NULL, urlFoto text, dataInicio DATE, dataFim DATE, UNIQUE (nome), PRIMARY KEY(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Eventos criada com sucesso");
      }
    });
  }
  criarUsuarios() {
    const sql = `CREATE TABLE IF NOT EXISTS Usuarios(
      id INT AUTO_INCREMENT NOT NULL,
      nome varchar(100) NOT NULL,
      urlFotoPerfil text,
     
      -- dados pessoais
      nomeCompleto varchar(100),
      dataNascimento date,
      rg varchar(20),
      cpf varchar(11),
      
      -- contatos
      telefone varchar(11),
      celular varchar(11),
      email varchar(50),
      
      -- senha
      senha varchar(10),
      
      -- endereco
      cep varchar(8),
      endereco varchar(100),
      numero int,
      complemento varchar(100),
      bairro varchar (100),
      UNIQUE (nome),
      PRIMARY KEY(id))`;

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Usuarios criada com sucesso");
      }
    });
  }
  criarTiposVendas() {
    const sql =
      "CREATE TABLE IF NOT EXISTS TipoVenda(id INT AUTO_INCREMENT NOT NULL, descricao VARCHAR(255), PRIMARY KEY(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela TipoVenda criada com sucesso");
      }
    });
  }
  criarUFs() {
    const sql =
      "CREATE TABLE IF NOT EXISTS UFs(id INT NOT NULL, sigla varchar(2) NOT NULL, nome varchar(30), primary key(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela UFs criada com sucesso");
      }
    });
  }

  criarMunicipio() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Municipio(id INT NOT NULL, nome varchar(50) NOT NULL, primary key(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Municipio criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
