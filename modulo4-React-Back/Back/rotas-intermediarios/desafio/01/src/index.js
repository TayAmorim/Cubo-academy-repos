const express = require("express");
const cors = require("cors");
const {
  somar,
  subtrair,
  dividir,
  multiplicar,
} = require("../src/controladores/calculadora");

const app = express();

app.get("/somar", somar);
app.get("/subtrair", subtrair);
app.get("/multiplicar", multiplicar);
app.get("/dividir", dividir);

app.listen("3000");
