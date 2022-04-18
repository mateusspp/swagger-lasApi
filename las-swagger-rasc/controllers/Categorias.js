'use strict';

var utils = require('../utils/writer.js');
var Categorias = require('../service/CategoriasService');

module.exports.addCat = function addCat (req, res, next) {
  var body = req.swagger.params['body'].value;
  Categorias.addCat(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCat = function deleteCat (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Categorias.deleteCat(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCat = function getCat (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Categorias.getCat(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCat = function updateCat (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Categorias.updateCat(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
