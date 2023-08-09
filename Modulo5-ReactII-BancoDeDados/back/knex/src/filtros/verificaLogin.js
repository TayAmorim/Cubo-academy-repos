const knex = require("../conexao");
const jwt = require("jsonwebtoken");
const senhaHash = require("../senhaHash");

const verificaLogin = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json("Não autorizado");
  }

  try {
    const token = authorization.replace("Bearer ", "").trim();

    const { id } = jwt.verify(token, senhaHash);

    const usuarioLogin = await knex("usuarios").where("id", id);

    if (usuarioLogin.length === 0) {
      return res.status(404).json("Usuario não encontrado");
    }

    const { senha, ...usuario } = usuarioLogin[0];

    req.usuario = usuarioLogin[0];

    next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = verificaLogin;
