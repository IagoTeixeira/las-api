'use strict';

var utils = require('../utils/writer.js');
var Categoria = require('../service/CategoriaService');

module.exports.category = function category (req, res, next) {
  var body = req.swagger.params['body'].value;
  Categoria.category(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategory = function deleteCategory (req, res, next) {
  var name = req.swagger.params['name'].value;
  Categoria.deleteCategory(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoriaByName = function getCategoriaByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  Categoria.getCategoriaByName(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategoria = function updateCategoria (req, res, next) {
  var name = req.swagger.params['name'].value;
  var body = req.swagger.params['body'].value;
  Categoria.updateCategoria(name,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
