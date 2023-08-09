const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaHash = require("../senhaHash");
const knex = require("../conexao");

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(404).json("É obrigatório email e senha");
  }

  try {
    const usuarioLogin = await knex("usuarios").where("email", email).first();

    if (usuarioLogin.length === 0) {
      return res.status(400).json("O usuario não foi encontrado");
    }

    const senhaCorreta = await bcrypt.compare(senha, usuarioLogin.senha);

    if (!senhaCorreta) {
      return res.status(400).json("Email e senha não confere");
    }

    const token = jwt.sign({ id: usuarioLogin.id }, senhaHash, {
      expiresIn: "8h",
    });

    const { senha: _, ...dadosUsuario } = usuarioLogin;

    return res.status(200).json({
      usuario: dadosUsuario,
      token,
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  login,
};
