const express = require("express");
const {
  mostrarJogador,
  removerJogador,
  adicionarJogadores,
} = require("../src/controladores/jogadas");
const { validarNome } = require("./intermediarios");

const app = express();

app.get("/", mostrarJogador);
app.get("/remover", removerJogador);
app.get("/adicionar", validarNome, adicionarJogadores);

app.listen(8000);
