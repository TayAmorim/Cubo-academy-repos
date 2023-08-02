const express = require("express");
const { cadastrarUsuario } = require("./controladores/usuarios");
const validarCamposVazios = require("./intermediarios/validarCamposVazios");

const rotas = express();

rotas.post("/usuario", validarCamposVazios, cadastrarUsuario);

module.exports = rotas;
