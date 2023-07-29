const express = require("express");
const { cadastrarAutor } = require("./controladores/biblioteca");
const { validarCampos } = require("./intermediarios");
const rotas = express();

rotas.post("/autor", validarCampos, cadastrarAutor);

module.exports = rotas;
