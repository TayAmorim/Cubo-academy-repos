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

module.exports = validacaoSenha;
