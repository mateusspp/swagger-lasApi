'use strict';


/**
 * Adiciona uma categoria
 *
 * body Categorias Adiciona uma categoria
 * returns categorias
 **/
exports.addCat = function(body) {
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
 * Delete uma categoria
 * Operacao que possui a finalidade de deletar uma categoria
 *
 * nome String Produto que precisa ser deletado
 * no response value expected for this operation
 **/
exports.deleteCat = function(nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontra uma categoria
 * Operacao que possui a finalidade de encontrar uma categoria
 *
 * nome String Categoria que precisa ser encontrada
 * no response value expected for this operation
 **/
exports.getCat = function(nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualize uma categoria
 * Operacao que possui a finalidade de atualizar uma categoria
 *
 * nome String Categoria que precisa ser atualizado
 * returns categorias
 **/
exports.updateCat = function(nome) {
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

