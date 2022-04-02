'use strict';

var utils = require('../utils/writer.js');
var Cupom = require('../service/CupomService');

module.exports.cupomId = function cupomId (req, res, next) {
  var body = req.swagger.params['body'].value;
  Cupom.cupomId(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCupom = function deleteCupom (req, res, next) {
  var name = req.swagger.params['name'].value;
  Cupom.deleteCupom(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCupomByName = function getCupomByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  Cupom.getCupomByName(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCupom = function updateCupom (req, res, next) {
  var name = req.swagger.params['name'].value;
  var body = req.swagger.params['body'].value;
  Cupom.updateCupom(name,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
