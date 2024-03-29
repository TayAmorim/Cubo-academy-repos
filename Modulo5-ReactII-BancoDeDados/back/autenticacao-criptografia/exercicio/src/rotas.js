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
  listarPokemons,
  listarPokemonId,
  deletarPokemon,
} = require("./controladores/pokemons");

const rotas = express();

rotas.post("/usuario", validarCamposVazios, cadastrarUsuario);
rotas.post("/login", validarCamposLogin, loginUsuario);

rotas.use(verificarUsuariosLogado);

rotas.get("/usuario/pokemons", listarPokemons);
rotas.get("/usuario/pokemon/:id", listarPokemonId);
rotas.post("/usuario/pokemon", validarCamposCadastrarPOkemon, cadastrarPOkemon);
rotas.post("/usuario/pokemon", validarCamposCadastrarPOkemon, cadastrarPOkemon);
rotas.patch(
  "/usuario/pokemon/:id",
  validarCampoAtualizarApelido,
  atualizatApelido
);
rotas.delete("/usuario/pokemon/:id", deletarPokemon);

module.exports = rotas;
