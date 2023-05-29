const express = require("express");
const {
  validacaoSenha,
  validacaoPropriedadesAluno,
} = require("./intermediarios");
const alunos = require("./controladores/alunos");

const rotas = express();

rotas.get("/alunos", alunos.listarAlunos);
rotas.get("/alunos/:id", validacaoSenha, alunos.listarIdAluno);
rotas.post(
  "/alunos/",
  validacaoSenha,
  validacaoPropriedadesAluno,
  alunos.cadastrarAluno
);

module.exports = rotas;
