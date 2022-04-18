'use strict';


/**
 * Adiciona um cupom
 * Operacao que possui a finalidade de encontrar um cupom
 *
 * body Cupons Adicionar um cupom
 * no response value expected for this operation
 **/
exports.addCup = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete um cupom
 * Operacao que possui a finalidade de deletar um cupom
 *
 * nome String Cupom que precisa ser deletado
 * no response value expected for this operation
 **/
exports.deleteCup = function(nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Pegar os nomes dos cupons
 *
 * nome String Produto que precisa ser deletadoo
 * returns cupons
 **/
exports.getCup = function(nome) {
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
 * Atualizar um cupom
 * Operacao que atualiza um cupom
 *
 * nome String Cupom que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updateCup = function(nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

