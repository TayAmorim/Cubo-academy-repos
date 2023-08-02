const validarCamposVazios = (req, res, next) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    res
      .status(400)
      .json({ message: "Os campos nome, senha e email são obrigatórios" });
  }
  if (nome === "" || email === "" || senha === "") {
    res
      .status(400)
      .json({ message: "Os campos nome, senha e email são obrigatórios" });
  }
  next();
};

module.exports = validarCamposVazios;
