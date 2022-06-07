const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

jest.mock("../src/repositorios/eventos");

describe("API de Eventos", () => {
  test("Listar Eventos", async () => {
    const resp = await request.get("/eventos");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 1,
      nome: "carnaval",
      descricao: "uma festa bonita",
      urlFoto: "https://www.randomuser.me/api/portraits/men/91.jpg",
      dataInicio: "15/02/2022",
      dataFim: "15/03/2022",
    });
  });
  test("Buscar Evento por id existente", async () => {
    const resp = await request.get("/eventos/1");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      dataFim: "15/03/2022",
      dataInicio: "15/02/2022",
      descricao: "uma festa bonita",
      id: 1,
      nome: "carnaval",
      urlFoto: "https://www.randomuser.me/api/portraits/men/91.jpg",
      status: "agendado",
    });
  });

  test("Buscar Evento por id inexistente", async () => {
    const resp = await request.get("/eventos/999999");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Adicionar Evento com dados válidos", async () => {
    const resp = await request.post("/eventos").send({
      nome: "carnaval",
      descricao: "uma festa bonita",
      urlFoto: "https://www.randomuser.me/api/portraits/men/91.jpg",
      dataInicio: "2022-06-17",
      dataFim: "2022-07-17",
      status: "agendado",
    });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      dataFim: "2022-07-17",
      dataInicio: "2022-06-17",
      descricao: "uma festa bonita",
      nome: "carnaval",
      urlFoto: "https://www.randomuser.me/api/portraits/men/91.jpg",
      status: "agendado",
    });
  });

  test("Alterar Evento", async () => {
    let teste = {
      nome: "carnaval",
      descricao: "uma festa bonito",
      urlFoto: "https://www.randomuser.me/api/portraits/men/91.jpg",
      dataInicio: "2022-06-17",
      dataFim: "2022-07-17",
      status: "agendado",
    };

    const resp = await request.put("/eventos/1").send(teste);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      dataFim: "15/03/2022",
      dataInicio: "15/02/2022",
      descricao: "uma festa bonita",
      id: 1,
      nome: "carnaval",
      urlFoto: "https://www.randomuser.me/api/portraits/men/91.jpg",
      status: "agendado",
    });
  });

  test("Excluir Evento com id existente", async () => {
    const resp = await request.delete("/eventos/1");
    expect(resp.statusCode).toBe(200);
  });

  test("Excluir Evento com id inexistente", async () => {
    const resp = await request.delete("/eventos/999999");
    expect(resp.statusCode).toBe(404);
  });

  test("Buscar Evento por status existente", async () => {
    const resp = await request.get("/eventos/status/agendado");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      dataFim: "15/03/2022",
      dataInicio: "15/02/2022",
      descricao: "uma festa bonita",
      id: 1,
      nome: "carnaval",
      urlFoto: "https://www.randomuser.me/api/portraits/men/91.jpg",
      status: "agendado",
    });
  });
});
