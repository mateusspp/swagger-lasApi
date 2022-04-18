'use strict';

var utils = require('../utils/writer.js');
var Produtos = require('../service/ProdutosService');

module.exports.addProd = function addProd (req, res, next) {
  var body = req.swagger.params['body'].value;
  Produtos.addProd(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attProd = function attProd (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Produtos.attProd(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProd = function deleteProd (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Produtos.deleteProd(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.encontrarProd = function encontrarProd (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Produtos.encontrarProd(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
