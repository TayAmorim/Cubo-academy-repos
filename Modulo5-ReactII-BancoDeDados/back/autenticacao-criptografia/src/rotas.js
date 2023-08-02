const express = require("express");
const { cadastrarUsuario, loginUsuario } = require("./controladores/usuarios");
const {
  validarCamposVazios,
  validarCamposLogin,
  validarCamposCadastrarPOkemon,
  validarCampoAtualizarApelido,
} = require("./intermediarios/validarCamposVazios");
const verificarUsuariosLogado = require("./intermediarios/autenticacao");
const {
  cadastrarPOkemon,
  atualizatApelido,
} = require("./controladores/pokemons");

const rotas = express();

rotas.post("/usuario", validarCamposVazios, cadastrarUsuario);
rotas.post("/login", validarCamposLogin, loginUsuario);

rotas.use(verificarUsuariosLogado);

rotas.post("/usuario/pokemon", validarCamposCadastrarPOkemon, cadastrarPOkemon);
rotas.patch(
  "/usuario/pokemon/:id",
  validarCampoAtualizarApelido,
  atualizatApelido
);

module.exports = rotas;
