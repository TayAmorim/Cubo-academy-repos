const express = require("express");
const validacaoSenha = require("./intermediarios");
const alunos = require("./controladores/alunos");

const rotas = express();

rotas.get("/alunos", alunos.listarAlunos);
rotas.get("/alunos/:id", validacaoSenha, alunos.listarIdAluno);
rotas.post("/alunos/", validacaoSenha, alunos.cadastrarAluno);

module.exports = rotas;
