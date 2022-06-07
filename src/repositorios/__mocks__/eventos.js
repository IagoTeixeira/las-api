let eventosMock = require("./eventos.json");
//eventosMock
class Eventos {
  listar() {
    return Promise.resolve(eventosMock);
  }

  buscarPorId(id) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  adicionar(evento) {
    return Promise.resolve(evento);
  }

  deletar(id) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  atualizar(_valores, id) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  listarEventoAgendados() {
    return Promise.resolve(eventosMock[0]);
  }
}

module.exports = new Eventos();
