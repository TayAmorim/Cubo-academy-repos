const express = require("express");
const convidados = require("./controladores/convidados");

const rotas = express();

rotas.get("/convidados", convidados.consultarListaInteiraConvidados);

module.exports = rotas;
