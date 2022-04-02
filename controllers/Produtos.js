'use strict';

var utils = require('../utils/writer.js');
var Produtos = require('../service/ProdutosService');

module.exports.addProduct = function addProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Produtos.addProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  var name = req.swagger.params['name'].value;
  var api_key = req.swagger.params['api_key'].value;
  Produtos.deleteProduct(name,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductByName = function getProductByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  Produtos.getProductByName(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProduct = function updateProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Produtos.updateProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
