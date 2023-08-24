const express = require("express");
const usuarios = require("./controladores/usuarios");
const login = require("./controladores/login");
const produtos = require("./controladores/produtos");
const verificaLogin = require("./filtros/verificaLogin");
const multer = require("./multer");
const uploadFile = require("./storage");
const knex = require("./conexao");

const rotas = express();

// cadastro de usuario
rotas.post("/usuarios", usuarios.cadastrarUsuario);

// login
rotas.post("/login", login.login);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

// obter e atualizar perfil do usuario logado
rotas.get("/perfil", usuarios.obterPerfil);
rotas.put("/perfil", usuarios.atualizarPerfil);

// crud de produtos

rotas.get("/produtos", produtos.listarProdutos);
rotas.get("/produtos/:id", produtos.obterProduto);

rotas.post("/produtos", multer.single("imagem"), async (req, res) => {
  const { usuario } = req;
  const { file } = req;
  const { nome, estoque, preco, categoria, descricao } = req.body;

  if (!nome) {
    return res.status(404).json("O campo nome é obrigatório");
  }

  if (!estoque) {
    return res.status(404).json("O campo estoque é obrigatório");
  }

  if (!preco) {
    return res.status(404).json("O campo preco é obrigatório");
  }

  if (!descricao) {
    return res.status(404).json("O campo descricao é obrigatório");
  }

  try {
    const produto = await knex("produtos")
      .insert({
        usuario_id: usuario.id,
        nome,
        estoque,
        preco,
        categoria,
        descricao,
      })
      .returning("*");
    if (!produto) {
      return res.status(400).json("O produto não foi cadastrado");
    }
    try {
      const arquivo = await uploadFile(
        `produtos/${produto[0].id}/${file.originalname}`,
        file.buffer,
        file.mimetype
      );
      if (file) {
        await knex("produtos")
          .update("imagem", arquivo.url)
          .where("id", produto[0].id);
      }
      return res.status(200).json("produto cadastrado com sucesso");
    } catch (error) {
      return res.status(400).json(error.message);
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

rotas.put("/produtos/:id", produtos.atualizarProduto);
rotas.delete("/produtos/:id", produtos.excluirProduto);

module.exports = rotas;
