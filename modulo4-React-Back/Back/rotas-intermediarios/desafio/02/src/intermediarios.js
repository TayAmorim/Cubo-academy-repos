const validarNome = (req, res, next) => {
  const { nome } = req.query;
  if (nome) {
    next();
  } else {
    return res.send("Parametro Nome obrigatório");
  }
};

module.exports = { validarNome };
