'use strict';


/**
 * Mostra as categorias
 *
 * body Categoria Created user object
 * no response value expected for this operation
 **/
exports.category = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta categoria
 *
 * name String name deletado
 * no response value expected for this operation
 **/
exports.deleteCategory = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by user name
 *
 * name String Pega o nome das categorias
 * returns categoria
 **/
exports.getCategoriaByName = function(name) {
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
 * coloca uma categoria
 *
 * name String name adicionado
 * body Categoria Atualizada categoria
 * no response value expected for this operation
 **/
exports.updateCategoria = function(name,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

