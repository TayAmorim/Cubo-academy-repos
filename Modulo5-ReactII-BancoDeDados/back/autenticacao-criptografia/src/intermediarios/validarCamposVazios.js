const validarCamposVazios = (req, res, next) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res
      .status(400)
      .json({ message: "Os campos nome, senha e email são obrigatórios" });
  } else if (nome === "" || email === "" || senha === "") {
    return res
      .status(400)
      .json({ message: "Os campos nome, senha e email são obrigatórios" });
  }

  return next();
};

const validarCamposLogin = (req, res, next) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res
      .status(400)
      .json({ message: "Os campos  senha e email são obrigatórios" });
  }
  if (email === "" || senha === "") {
    return res
      .status(400)
      .json({ message: "Os campos senha e email são obrigatórios" });
  }
  return next();
};

module.exports = { validarCamposVazios, validarCamposLogin };
