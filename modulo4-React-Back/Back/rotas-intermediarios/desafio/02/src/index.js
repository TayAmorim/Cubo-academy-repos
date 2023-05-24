const express = require("express");
const {
  mostrarJogador,
  removerJogador,
} = require("../src/controladores/jogadas");

const app = express();

app.get("/", mostrarJogador);
app.get("/remover", removerJogador);

app.listen(8000);
