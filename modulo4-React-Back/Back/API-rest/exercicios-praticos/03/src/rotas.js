const express = require("express");
let biblioteca = require("./controladores/biblioteca");

const rotas = express();

rotas.get("/livros", biblioteca.consultarColecao);
rotas.get("/livros/:id", biblioteca.consultarLivroId);
rotas.post("/livros", biblioteca.adicionarLivro);
rotas.put("/livros/:id", biblioteca.substituirLIvro);

module.exports = rotas;
