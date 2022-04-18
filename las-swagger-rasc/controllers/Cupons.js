'use strict';

var utils = require('../utils/writer.js');
var Cupons = require('../service/CuponsService');

module.exports.addCup = function addCup (req, res, next) {
  var body = req.swagger.params['body'].value;
  Cupons.addCup(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCup = function deleteCup (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Cupons.deleteCup(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCup = function getCup (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Cupons.getCup(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCup = function updateCup (req, res, next) {
  var nome = req.swagger.params['nome'].value;
  Cupons.updateCup(nome)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
