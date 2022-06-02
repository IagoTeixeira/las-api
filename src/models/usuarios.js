const repositorios = require("../repositorios/usuario");
const { validarNome, validarCpf } = require("./validações");
class Usuarios {
  listar() {
    return repositorios.listar();
  }

  async adicionar(usuario) {
    const validacao = await validarNome(usuario);
    if (validacao) {
      return repositorios.adicionar(usuario);
    } else {
      return validacao;
    }
  }

  buscarPorId(id) {
    return repositorios.buscarPorId(id);
  }
  alterar(id, valores) {
    return repositorios.alterar(id, valores);
  }

  excluir(id) {
    return repositorios.excluir(id);
  }

  buscarPorNome(nome) {
    return repositorios.buscarPorNome(nome);
  }

  //DADOS PESSOAIS
  listarDadosPessoais(id) {
    return repositorios.listarDadosPessoais(id);
  }

  alterarDadosPessoais(id, valores) {
    if (!validarCpf(valores.cpf)) {
      return Promise.reject({ message: "CPF INVÁLIDO" });
    }
    return repositorios.alterarDadosPessoais(id, valores);
  }

  //Contatos
  listarContatos(id) {
    return repositorios.listarContatos(id);
  }

  alterarContatos(id, valores) {
    return repositorios.alterarContatos(id, valores);
  }

  //Endereço
  listarEndereco(id) {
    return repositorios.listarEndereco(id);
  }

  alterarEndereco(id, valores) {
    return repositorios.alterarEndereco(id, valores);
  }

  //Senha
  alterarSenha(id, valores) {
    if (valores.senha.length < 8) {
      return Promise.reject({ message: "Senha inválida" });
    }
    return repositorios.alterarSenha(id, valores);
  }
}

module.exports = new Usuarios();
