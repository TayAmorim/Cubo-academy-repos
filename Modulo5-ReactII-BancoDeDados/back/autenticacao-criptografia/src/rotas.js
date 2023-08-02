const express = require("express");
const { cadastrarUsuario, loginUsuario } = require("./controladores/usuarios");
const {
  validarCamposVazios,
  validarCamposLogin,
  validarCamposCadastrarPOkemon,
} = require("./intermediarios/validarCamposVazios");
const verificarUsuariosLogado = require("./intermediarios/autenticacao");
const { cadastrarPOkemon } = require("./controladores/pokemons");

const rotas = express();

rotas.post("/usuario", validarCamposVazios, cadastrarUsuario);
rotas.post("/login", validarCamposLogin, loginUsuario);

rotas.use(verificarUsuariosLogado);

rotas.post("/usuario/pokemon", validarCamposCadastrarPOkemon, cadastrarPOkemon);

module.exports = rotas;
