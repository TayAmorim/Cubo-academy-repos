const express = require("express");
const instrutores = require("./controladores/instrutores");

const rotas = express();

rotas.get("/instrutores", instrutores.listarInstrutores);
rotas.get("/instrutores/:id", instrutores.obterInstrutor);
rotas.post("/instrutores", instrutores.cadastrarInstrutor);
rotas.put("/instrutores/:id", instrutores.atualizarInstrutor);
rotas.patch("/instrutores/:id/status", instrutores.atualizarStatusInstrutor);
rotas.delete("/instrutores/:id/", instrutores.excluirInstrutor);
rotas.post("/instrutores/:id/aulas", instrutores.cadastrarAulaInstrutor);
rotas.get("/aulas", instrutores.listarAulasInstrutor);
rotas.get("/aulas/:id", instrutores.detalharDescricaoAula);
rotas.get("/instrutores/:id/aulas", instrutores.listarTodasAulasInstrutor);

module.exports = rotas;
