const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

function corrigirProva(provaAluno) {
  let acertos = 0;
  let nota = 0;
  for (let questao of provaAluno.questoes) {
    if (questao.resposta === questao.correta) {
      acertos += 1;
    }
  }
  nota = (provaAluno.valor / provaAluno.questoes.length) * acertos;
  return `O aluno ${provaAluno.aluno} acertou ${acertos} questões e obeteve nota ${nota}`;
}

console.log(corrigirProva(prova));
