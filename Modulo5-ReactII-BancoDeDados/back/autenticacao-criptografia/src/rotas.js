const express = require("express");

const rotas = express();

rotas.get("/", (req, res) => {
  res.json("oi");
});

module.exports = rotas;
