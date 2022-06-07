const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

jest.mock("../src/repositorios/municipio");

describe("API de municipio", () => {
  test("Listar municipios existentes", async () => {
    const resp = await request.get("/ufs");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      "Ceilândia",
      "Samambaia",
      "Plano Piloto",
      "Taguatinga",
      "Planaltina",
    ]);
  });

  test("Listar municipios inexistentes", async () => {
    const resp = await request.get("/ufs/azul");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });
});
