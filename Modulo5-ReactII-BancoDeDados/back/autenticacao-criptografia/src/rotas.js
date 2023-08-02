const express = require("express");
const { cadastrarUsuario, loginUsuario } = require("./controladores/usuarios");
const {
  validarCamposVazios,
  validarCamposLogin,
} = require("./intermediarios/validarCamposVazios");
const verificarUsuariosLogado = require("./intermediarios/autenticacao");

const rotas = express();

rotas.post("/usuario", validarCamposVazios, cadastrarUsuario);
rotas.post("/login", validarCamposLogin, loginUsuario);

rotas.use(verificarUsuariosLogado);

rotas.get("/", (req, res) => {
  res.json("teste");
});

module.exports = rotas;
