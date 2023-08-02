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

const validarCamposCadastrarPOkemon = (req, res, next) => {
  const { nome, habilidades } = req.body;
  if (!nome || !habilidades) {
    return res
      .status(400)
      .json({ message: "Os campos habilidades e nome são obrigatórios" });
  }
  if (nome === "" || habilidades === "") {
    return res
      .status(400)
      .json({ message: "Os campos habilidades e nome são obrigatórios" });
  }
  return next();
};

const validarCampoAtualizarApelido = (req, res, next) => {
  const { id } = req.params;
  const { apelido } = req.body;

  if (!id || !apelido) {
    return res
      .status(400)
      .json({ message: "É necessaário informar o id do pokemon e o apelido" });
  }
  if (isNaN(id) || apelido === "") {
    return res.status(400).json({
      message:
        "O id precisa ser um tipo numerico e o apelido não pode estar vazio",
    });
  }
  return next();
};

module.exports = {
  validarCamposVazios,
  validarCamposLogin,
  validarCamposCadastrarPOkemon,
  validarCampoAtualizarApelido,
};
