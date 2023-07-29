const express = require("express");

const rotas = express();

rotas.get("/", (req, res) => {
  res.json("funcionando");
});

module.exports = rotas;
