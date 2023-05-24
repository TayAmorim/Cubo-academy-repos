const express = require("express");
const app = express();
const { pegarImoveis, filtrarImoveis } = require("./controladores/imoveis");

app.get("/imoveis", pegarImoveis);
app.get("/imoveis/:id", filtrarImoveis);

app.listen(8000);
