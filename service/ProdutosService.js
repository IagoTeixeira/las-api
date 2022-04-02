'use strict';


/**
 * Adiciona produtos.
 *
 * body Produtos Deve adicionar um produtos.
 * no response value expected for this operation
 **/
exports.addProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta um produto.
 *
 * name Long Deleta produto id
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteProduct = function(name,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Localiza pelo nome do produto.
 * Retorna um produto.
 *
 * name Long Retorna nome do produto.
 * returns produtos
 **/
exports.getProductByName = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar um produtos já existente.
 *
 * body Produtos Deve atualizar o produtos.
 * no response value expected for this operation
 **/
exports.updateProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

