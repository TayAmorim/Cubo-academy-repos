const { log } = require("console");
const express = require("express");

const servidor = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let cont = 0;
servidor.get("/", (req, res) => {
  res.send(`É a vez de ${jogadores[cont]} jogar!`);
  cont++;
  if (cont >= jogadores.length) {
    cont = 0;
  }
});

servidor.listen(3000);
