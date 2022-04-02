'use strict';


/**
 * Mostra os cupons
 *
 * body Cupom Cria um cupom
 * no response value expected for this operation
 **/
exports.cupomId = function(body) {
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
exports.deleteCupom = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Pega o cupom pelo nome
 *
 * name String Pega o nome do cupom
 * returns cupom
 **/
exports.getCupomByName = function(name) {
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
 * coloca uma cupom
 *
 * name String name adicionado
 * body Cupom Atualizada cupom
 * no response value expected for this operation
 **/
exports.updateCupom = function(name,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

