const knex = require("../conexao");
const conexao = require("../conexao");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha, nome_loja } = req.body;

  if (!nome) {
    return res.status(404).json("O campo nome é obrigatório");
  }

  if (!email) {
    return res.status(404).json("O campo email é obrigatório");
  }

  if (!senha) {
    return res.status(404).json("O campo senha é obrigatório");
  }

  if (!nome_loja) {
    return res.status(404).json("O campo nome_loja é obrigatório");
  }

  try {
    const quantidadeUsuarios = await knex("usuarios").where("email", email);

    if (quantidadeUsuarios.length > 0) {
      return res.status(400).json("O email já existe");
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const Novousuario = {
      nome,
      email,
      senha: senhaCriptografada,
      nome_loja,
    };

    const cadastrarNovoUsuario = await knex("usuarios")
      .insert(Novousuario)
      .returning("*");

    if (cadastrarNovoUsuario.rowCount === 0) {
      return res.status(400).json("O usuário não foi cadastrado.");
    }

    return res.status(200).json(cadastrarNovoUsuario[0]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obterPerfil = async (req, res) => {
  return res.status(200).json(req.usuario);
};

const atualizarPerfil = async (req, res) => {
  let { nome, email, senha, nome_loja } = req.body;

  if (!nome && !email && !senha && !nome_loja) {
    return res
      .status(404)
      .json("É obrigatório informar ao menos um campo para atualização");
  }

  try {
    if (nome) {
      nome = nome;
    }

    if (email) {
      if (email !== req.usuario.email) {
        const quantidadeUsuarios = await knex("usuarios").where("email", email);

        if (quantidadeUsuarios.length > 0) {
          return res.status(400).json("O email já existe");
        }
      }

      email = email;
    }

    if (senha) {
      senha = await bcrypt.hash(senha, 10);
    }

    if (nome_loja) {
      nome_loja = nome_loja;
    }

    const id = req.usuario.id;

    const dadosAtualizados = await knex("usuarios")
      .update({ nome, email, senha, nome_loja })
      .where("id", id)
      .returning("*");
    return res.json(dadosAtualizados);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  cadastrarUsuario,
  obterPerfil,
  atualizarPerfil,
};
