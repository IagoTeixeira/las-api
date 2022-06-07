const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());
jest.mock("../src/repositorios/usuario");

describe("API de Usuários", () => {
  test("listar usuários", async () => {
    const resp = await request.get("/usuarios");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        nome: "Pietro",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 2,
        nome: "Max",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 5,
        nome: "Michael Jackson",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 7,
        nome: "Jason",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 14,
        nome: "Acm Neto",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 17,
        nome: "Acm ",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      { id: 18, nome: "Acm SP", urlFotoPerfil: "https://wwxxxx" },
      {
        id: 20,
        nome: "Acm RJ",
        urlFotoPerfil: "http://enderecoinvalido.com.br\n",
      },
      {
        id: 22,
        celular: 71998256431,
        email: "iadaog@gamail.com",
        telefone: 71998256431,
      },
      {
        id: 23,
        nomeCompleto: "Maxwell Andrade",
        dataNascimento: "08/10/1882",
        rg: "1231546546",
        cpf: "12131556063",
      },
      {
        id: 24,
        cep: "40285648",
        endereco: "Av pocoio",
        numero: 28,
        complemento: "casa",
        bairro: "Mota",
      },
      {
        id: 25,
        senha: "asdaspdo",
      },
    ]);
  });

  test("Buscar usuário por id existente", async () => {
    const resp = await request.get("/usuarios/2");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 2,
      nome: "Max",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    });
  });

  test("Buscar usuário por id inexistente", async () => {
    const resp = await request.get("/usuarios/999999");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Adicionar usuário com dados válidos", async () => {
    const resp = await request.post("/usuarios").send({
      nome: "Max",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      nome: "Max",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    });
  });

  test("Alterar id de usuarios", async () => {
    let teste = {
      nome: "Max",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    };

    const resp = await request.put("/usuarios/2").send(teste);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 2,
      ...teste,
    });
  });

  test("Excluir usuário com id existente", async () => {
    const resp = await request.delete("/usuarios/1");
    expect(resp.statusCode).toBe(200);
  });

  test("Excluir usuário com id inexistente", async () => {
    const resp = await request.delete("/usuarios/999999");
    expect(resp.statusCode).toBe(404);
  });

  test("Buscar usuário por nome existente", async () => {
    const resp = await request.get("/usuarios/nome/Pietro");
    let teste = {
      id: 1,
      nome: "Pietro",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    };
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(teste);
  });

  test("Buscar usuário por nome inexistente", async () => {
    const resp = await request.get("/usuarios/nome/Übermensch");

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual("");
  });

  test("Listar dados pessoais", async () => {
    const resp = await request.get("/usuarios/23/dados-pessoais");

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 23,
      nomeCompleto: "Maxwell Andrade",
      dataNascimento: "08/10/1882",
      rg: "1231546546",
      cpf: "12131556063",
    });
  });

  test("Buscar dados pessoais por id inexistente", async () => {
    const resp = await request.get("/usuarios/222/dados-pessoais");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Alterar dados pessoais", async () => {
    let teste = {
      id: 23,
      nomeCompleto: "Maxwell Andrade",
      dataNascimento: "08/10/1882",
      rg: "1231546546",
      cpf: "12131556063",
    };

    const resp = await request.put("/usuarios/23/dados-pessoais").send(teste);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 23,
      ...teste,
    });
  });

  test("Buscar contato por id inexistente", async () => {
    const resp = await request.put("/usuarios/222/dados-pessoais");
    expect(resp.statusCode).toBe(500);
    expect(resp.body).toEqual({
      error: {
        message: "CPF INVÁLIDO",
      },
    });
  });

  test("Listar contato", async () => {
    const resp = await request.get("/usuarios/22/contatos");

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      celular: 71998256431,
      email: "iadaog@gamail.com",
      id: 22,
      telefone: 71998256431,
    });
  });

  test("Buscar contato por id inexistente", async () => {
    const resp = await request.get("/usuarios/222/contatos");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Alterar contato", async () => {
    let teste = {
      celular: 71998256431,
      email: "iadaog@gamail.com",
      telefone: 71998256431,
    };

    const resp = await request.put("/usuarios/22/contatos").send(teste);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 22,
      ...teste,
    });
  });

  test("Buscar contato por id inexistente", async () => {
    const resp = await request.put("/usuarios/233/contatos");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Listar endereço", async () => {
    const resp = await request.get("/usuarios/24/endereco");

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 24,
      cep: "40285648",
      endereco: "Av pocoio",
      numero: 28,
      complemento: "casa",
      bairro: "Mota",
    });
  });

  test("Buscar endereço por id inexistente", async () => {
    const resp = await request.get("/usuarios/2420/endereco");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Alterar endereço", async () => {
    let teste = {
      id: 24,
      cep: "40285648",
      endereco: "Av pocoio",
      numero: 28,
      complemento: "casa",
      bairro: "Mota",
    };

    const resp = await request.put("/usuarios/24/endereco").send(teste);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 24,
      ...teste,
    });
  });

  test("Buscar endereço por id inexistente", async () => {
    const resp = await request.put("/usuarios/233/endereco");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Alterar senha", async () => {
    let teste = { senha: "asdaspdo" };
    const resp = await request.put("/usuarios/25/senha").send(teste);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ message: "senha alterada com sucesso." });
  });
});
