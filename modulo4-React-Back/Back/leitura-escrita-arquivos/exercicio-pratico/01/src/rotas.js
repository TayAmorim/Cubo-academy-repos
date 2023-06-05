const express = require("express");
const calculandoCompras = require("./controladores/calculando-compra");

const rotas = express();

rotas.get("/produtos", calculandoCompras.listarProdutos);
rotas.get("/produtos/:idProduto", calculandoCompras.detalharProdutoId);
rotas.get(
  "/produtos/:idProduto/frete/:cep",
  calculandoCompras.pegarEstadoEcalcularFrete
);

module.exports = rotas;
