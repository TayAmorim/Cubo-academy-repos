let { instrutores } = require("../bancodedados");
let { identificadorInstrutor } = require("../bancodedados");

const listarInstrutores = (req, res) => {
  return res.json(instrutores);
};

const obterInstrutor = (req, res) => {
  const { id } = req.params;

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Invalid instrutor" });
  }
  return res.status(200).json(instrutor);
};

const cadastrarInstrutor = (req, res) => {
  const { nome, email, status } = req.body;
  if (!nome) {
    return res.status(400).json({ message: "O nome é obrigatório" });
  }
  if (!email) {
    return res.status(400).json({ message: "O email é obrigatório" });
  }
  const instrutor = {
    id: identificadorInstrutor++,
    nome,
    email,
    status: status ?? true,
  };
  instrutores.push(instrutor);
  return res.status(201).json(contas);
};

const atualizarInstrutor = (req, res) => {
  const { id } = req.params;
  const { nome, email, status } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "O nome é obrigatório" });
  }
  if (!email) {
    return res.status(400).json({ message: "O email é obrigatório" });
  }

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Invalid instrutor" });
  }

  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;

  return res.status(204).send();
};

const atualizarStatusInstrutor = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Invalid instrutor" });
  }

  instrutor.status = status;

  return res.status(204).send();
};

const excluirInstrutor = (req, res) => {
  const { id } = req.params;
  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );
  if (!instrutor) {
    return res.status(404).json({ message: "O instrutor não existe" });
  }
  instrutores = instrutores.filter((instrutor) => instrutor.id !== Number(id));

  return res.status(204).send();
};

const cadastrarAulaInstrutor = (req, res) => {
  const { id } = req.params;
  const { titulo, descricao } = req.body;

  const filtroinstrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (!filtroinstrutor) {
    return res.status(404).json({ mensagem: "Instutor não encontrado" });
  }

  if (!titulo) {
    return res.status(404).json({ mensagem: "Título Obrigatório" });
  }
  if (!descricao) {
    return res.status(404).json({ mensagem: "Descrição Obrigatório" });
  }
  filtroinstrutor.aula = filtroinstrutor.aula || [];

  let index = id - 1;
  filtroinstrutor.aula.push({ titulo, descricao });
  instrutores[index] = filtroinstrutor;
  return res.status(201).json(filtroinstrutor.aula);
};

const listarAulasInstrutor = (req, res) => {
  const aulas = [];
  instrutores.forEach((instrutor) => {
    if (instrutor.aula !== undefined) {
      aulas.push(instrutor.aula);
    }
  });
  if (aulas.length === 0) {
    return res
      .status(404)
      .json({ message: "Nenhum professor tem aulas cadastradas" });
  }
  return res.json(aulas);
};

const detalharDescricaoAula = (req, res) => {
  const { id } = req.params;
  const aulasDescricao = [];

  const filtroinstrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );

  if (!filtroinstrutor) {
    return res.status(404).json({ message: "Instrutor não encontrado" });
  }

  if (!filtroinstrutor.aula) {
    return res
      .status(404)
      .json({ message: "Instrutor não possui aula cadastrada" });
  }
  filtroinstrutor.aula.forEach((instrutor) => {
    if (instrutor !== undefined) {
      aulasDescricao.push([instrutor.descricao]);
    }
  });

  return res.json(aulasDescricao);
};

const listarTodasAulasInstrutor = (req, res) => {
  const { id } = req.params;
  const aulaInstrutor = [];
  const filtroinstrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(id)
  );
  if (!filtroinstrutor) {
    return res.status(404).json({ message: "Instrutor não encontrado" });
  }

  if (!filtroinstrutor.aula) {
    return res
      .status(404)
      .json({ message: "Instrutor não possui aula cadastrada" });
  }

  filtroinstrutor.aula.forEach((aula) => {
    if (aula !== undefined) {
      aulaInstrutor.push(aula);
    }
  });

  res.status(200).json(aulaInstrutor);
};

module.exports = {
  listarInstrutores,
  obterInstrutor,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarStatusInstrutor,
  excluirInstrutor,
  cadastrarAulaInstrutor,
  listarAulasInstrutor,
  detalharDescricaoAula,
  listarTodasAulasInstrutor,
};
