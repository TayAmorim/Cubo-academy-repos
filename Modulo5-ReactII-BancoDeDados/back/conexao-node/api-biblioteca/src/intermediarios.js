const validarCampos = (req, res, next) => {
  const { nome, idade } = req.body;
  if (!nome) {
    return res.status(401).json({ mensage: "Nome é obrigatório" });
  }
  if (idade) {
    if (typeof idade !== "number") {
      return res.status(401).json({ mensage: "Formato invalido para o idade" });
    }
  }
  next();
};

module.exports = { validarCampos };
