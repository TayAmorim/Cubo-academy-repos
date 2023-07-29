const express = require("express");
const {
  cadastrarAutor,
  pesquisarAutor,
} = require("./controladores/biblioteca");
const { validarCampos } = require("./intermediarios");
const rotas = express();

rotas.post("/autor", validarCampos, cadastrarAutor);
rotas.get("/autor/:id", pesquisarAutor);

module.exports = rotas;
