const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

jest.mock("../src/repositorios/tipoVenda");

describe("API de Tipo de Venda", () => {
  test("listar Tipo de Venda", async () => {
    const resp = await request.get("/tipos-vendas");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        descricao: "Bebida",
      },
      {
        id: 2,
        descricao: "Suco",
      },
      {
        id: 3,
        descricao: "Comida",
      },
    ]);
  });

  test("Buscar por id de uma venda existente", async () => {
    const resp = await request.get("/tipos-vendas/1");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 1,
      descricao: "Bebida",
    });
  });

  test("Buscar por id de uma venda inexistente", async () => {
    const resp = await request.get("/tipos-vendas/999999");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Adicionar um tipo de venda", async () => {
    const resp = await request.post("/tipos-vendas").send({
      id: 2,
      descricao: "Suco",
    });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      id: 2,
      descricao: "Suco",
    });
  });

  test("Alterar um tipo de venda", async () => {
    const resp = await request.put("/tipos-vendas/2").send({
      id: 2,
      descricao: "Suco",
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 2,
      descricao: "Suco",
    });
  });

  test("Excluir um tipo de venda existente", async () => {
    const resp = await request.delete("/tipos-vendas/1");
    expect(resp.statusCode).toBe(200);
  });

  test("Excluir um tipo de venda inexistente", async () => {
    const resp = await request.delete("/tipos-vendas/999999");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({ messsage: "evento deletado com sucesso." });
  });
});
