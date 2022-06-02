let tipoVendaMock = require("./tipoVendas.json");

class TipoVenda {
  listar() {
    return Promise.resolve(tipoVendaMock);
  }
  listarPorId(id) {
    return Promise.resolve(
      tipoVendaMock.find((tipoVenda) => tipoVenda.id === id)
    );
  }

  adicionar(tipovenda) {
    return Promise.resolve(tipovenda);
  }

  alterar(id) {
    return Promise.resolve(
      tipoVendaMock.find((tipoVenda) => tipoVenda.id === id)
    );
  }

  deletar(id) {
    return Promise.resolve(
      tipoVendaMock.find((tipoVenda) => tipoVenda.id === id)
    );
  }
}

module.exports = new TipoVenda();
