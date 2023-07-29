const express = require("express");
const {
  cadastrarAutor,
  pesquisarAutor,
  cadastraLivro,
} = require("./controladores/biblioteca");
const { validarCampos } = require("./intermediarios");
const rotas = express();

rotas.get("/autor/:id", pesquisarAutor);
rotas.post("/autor", validarCampos, cadastrarAutor);
rotas.post("/autor/:id/livro", cadastraLivro);

module.exports = rotas;
