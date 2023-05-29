const express = require("express");
let biblioteca = require("./controladores/biblioteca");

const rotas = express();

rotas.get("/livros", biblioteca.consultarColecao);
rotas.get("/livros/:id", biblioteca.consultarLivroId);

module.exports = rotas;
