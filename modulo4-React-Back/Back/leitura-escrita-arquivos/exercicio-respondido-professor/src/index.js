const express = require("express");
const { listarProdutos, vendas } = require("./controladores/vendas");

const app = express();

app.use(express.json());

app.get("/produtos", listarProdutos);
app.post("/produtos", vendas);

app.listen(3000);
