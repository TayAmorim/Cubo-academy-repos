let { alunos, idAluno } = require("../bancodedados");

const listarAlunos = (req, res) => {
  res.json(alunos);
};

const listarIdAluno = (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.status(400).json({ mensagem: "Id  deve ser um numero válido" });
  }
  const alunoPesquisado = alunos.find((aluno) => aluno.id === Number(id));

  if (!alunoPesquisado) {
    return res.status(400).json({ mensagem: "Aluno não encontrado" });
  }

  return res.json(alunoPesquisado);
};

const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  const novoAluno = {
    id: idAluno++,
    nome,
    sobrenome,
    idade,
    curso,
  };
  alunos.push(novoAluno);
  return res.status(201).json();
};

const deletarAluno = (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.status(400).json({ mensagem: "Id  deve ser um numero válido" });
  }
  const alunoPesquisado = alunos.find((aluno) => aluno.id === Number(id));

  if (!alunoPesquisado) {
    return res.status(404).json({ mensagem: "Aluno não encontrado" });
  }

  alunos = alunos.filter((aluno) => aluno.id !== Number(id));
  res.json(alunos);
};

module.exports = { listarAlunos, listarIdAluno, cadastrarAluno, deletarAluno };
