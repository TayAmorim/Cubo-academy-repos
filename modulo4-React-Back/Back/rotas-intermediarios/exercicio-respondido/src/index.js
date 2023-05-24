const express = require("express");
const { listagemCarros, obeterCarro } = require("./controladores/carros");

const app = express();
const senhaMidle = (req, res, next) => {
  const { senha } = req.query;
  if (!senha) {
    return res.send("A senha está incorreta");
  }
  if (senha !== "carro123") {
    return res.send("A senha está incorreta");
  }
  next();
};

app.get("/carros", senhaMidle, listagemCarros);
app.get("/carros/:id", senhaMidle, obeterCarro);

app.listen(3000);
