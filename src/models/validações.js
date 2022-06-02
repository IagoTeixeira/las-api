const fetch = require("node-fetch");
const repositorios = require("../repositorios/usuario");

async function validarNome(valores) {
  const nomeEhValido =
    valores?.nome?.length > 0 &&
    (await repositorios.validarNomeUsuarioNaoUtilizado(valores.nome));

  const urlEhValida = await validarURLFoto(valores.urlFotoPerfil);

  const validacoes = [
    {
      nome: "nome",
      valido: nomeEhValido,
      mensagem: "Nome deve ser informado e deve ser único",
    },
    {
      nome: "urlFotoPerfil",
      valido: urlEhValida,
      mensagem: "URL deve uma URL válida",
    },
  ];

  const erros = validacoes.filter((campo) => !campo.valido);
  const existemErros = erros.length;

  if (existemErros) {
    return Promise.reject(erros);
  } else {
    return true;
  }
}

async function validarURLFoto(url) {
  try {
    const regex =
      /https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&//=]*)/gm;
    const verificaUrl = url.match(regex);
    if (!verificaUrl) {
      return false;
    }
    const response = await fetch(url);
    if (response.status !== 200) {
      return false;
    } else {
      return true;
    }
  } catch {
    return false;
  }
}
function validarCpf(cpf) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/gim, "");
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    return false;
  }
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

module.exports = { validarNome, validarURLFoto, validarCpf };
