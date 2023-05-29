const express = require("express");
const convidados = require("./controladores/convidados");

const rotas = express();

rotas.get("/convidados", convidados.consultarListaInteiraConvidados);
rotas.post("/convidados", convidados.adicionarConvidado);

module.exports = rotas;
