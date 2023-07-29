const express = require("express");
const {
  cadastrarAutor,
  pesquisarAutor,
  cadastraLivro,
  listarLivros,
} = require("./controladores/biblioteca");
const { validarCampos } = require("./intermediarios");
const rotas = express();

rotas.get("/autor/:id", pesquisarAutor);
rotas.get("/livro", listarLivros);
rotas.post("/autor", validarCampos, cadastrarAutor);
rotas.post("/autor/:id/livro", cadastraLivro);

module.exports = rotas;
