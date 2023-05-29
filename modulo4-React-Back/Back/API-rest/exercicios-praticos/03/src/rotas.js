const express = require("express");
let biblioteca = require("./controladores/biblioteca");

const rotas = express();

rotas.get("/livros", biblioteca.consultarColecao);
rotas.get("/livros/:id", biblioteca.consultarLivroId);
rotas.post("/livros", biblioteca.adicionarLivro);
rotas.put("/livros/:id", biblioteca.substituirLIvro);
rotas.patch("/livros/:id", biblioteca.substituirPropLivro);
rotas.delete("/livros/:id", biblioteca.deletLivro);

module.exports = rotas;
