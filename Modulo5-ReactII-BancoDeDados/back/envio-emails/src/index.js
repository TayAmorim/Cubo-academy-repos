require("dotenv").config();
const express = require("express");
const app = express();
const { cadastrar } = require("./controladores/cadastro.js");

app.use(express.json());

app.post("/cadastrar", cadastrar);

app.listen(process.env.PORT);
