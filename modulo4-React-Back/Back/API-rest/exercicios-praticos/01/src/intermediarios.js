const validacaoSenha = (req, res, next) => {
  const { senha } = req.query;

  if (!senha) {
    return res.status(401).json({ mensagem: "É preciso informar a senha" });
  }
  if (senha !== "cubos123") {
    return res.status(401).json({ mensagem: "Senha incorreta" });
  }
  next();
};

const validacaoPropriedadesAluno = (req, res, next) => {
  const { nome, sobrenome, idade, curso } = req.body;
  if (!nome) {
    return res.status(400).json({ message: "O nome é obrigatório" });
  }
  if (!sobrenome) {
    return res.status(400).json({ message: "O sobrenome é obrigatório" });
  }
  if (!idade) {
    return res.status(400).json({ message: "O idade é obrigatório" });
  }
  if (!curso) {
    return res.status(400).json({ message: "O curso é obrigatório" });
  }
  if (nome === "" || nome === " ") {
    return res.status(400).json({ message: "Formato do nome inválido" });
  }
  if (sobrenome === "" || sobrenome === " ") {
    return res.status(400).json({ message: "Formato do sobrenome inválido" });
  }
  if (curso === "" || curso === " ") {
    return res.status(400).json({ message: "Formato do curso inválido" });
  }
  if (idade < 18) {
    return res.status(400).json({
      message: "Aluno com idade menor que 18 anos não pode fazer a matricula ",
    });
  }
  next();
};

module.exports = { validacaoSenha, validacaoPropriedadesAluno };
