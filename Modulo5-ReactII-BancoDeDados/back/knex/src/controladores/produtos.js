const knex = require("../conexao");

const listarProdutos = async (req, res) => {
  const usuarioID = req.usuario.id;
  const { categoria } = req.query;
  const result = [];

  if (typeof categoria === "string") {
    const listarProdutos = await knex("produtos")
      .where("usuario_id", usuarioID)
      .where("categoria", "ilike", categoria);
    return res.json(listarProdutos);
  }

  if (typeof categoria === "object") {
    for (const categorias of categoria) {
      try {
        const listarProdutos = await knex("produtos")
          .where("usuario_id", usuarioID)
          .where("categoria", "ilike", categorias)
          .returning("*");

        result.push(...listarProdutos);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    return res.json(result);
  }
};

const obterProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const query = `select * from produtos where usuario_id = $1 and id = $2`;
    const { rows, rowCount } = await conexao.query(query, [usuario.id, id]);

    if (rowCount === 0) {
      return res.status(404).json("Produto não encontrado");
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarProduto = async (req, res) => {
  const usuario_id = req.usuario.id;
  const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

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
        usuario_id,
        nome,
        estoque,
        preco,
        categoria,
        descricao,
        imagem,
      })
      .returning("*");

    if (produto.length === 0) {
      return res.status(400).json("O produto não foi cadastrado");
    }

    return res.json(produto[0]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarProduto = async (req, res) => {
  const usuario_id = req.usuario.id;
  const { id } = req.params;
  let { nome, estoque, preco, categoria, descricao, imagem } = req.body;

  if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
    return res
      .status(404)
      .json("Informe ao menos um campo para atualizaçao do produto");
  }

  try {
    const produtoValido = await knex("produtos").where("id", id);

    if (produtoValido.length === 0) {
      return res.status(404).json("Produto não encontrado");
    }

    if (nome) {
      nome = nome;
    }

    if (estoque) {
      estoque = estoque;
    }

    if (categoria) {
      categoria = categoria;
    }

    if (descricao) {
      descricao = descricao;
    }

    if (preco) {
      preco = preco;
    }

    if (imagem) {
      imagem = imagem;
    }

    const produtoAtualizado = await knex("produtos")
      .update({
        nome,
        estoque,
        preco,
        categoria,
        descricao,
        imagem,
      })
      .where("id", id)
      .returning("*");

    if (produtoAtualizado.length === 0) {
      return res.status(400).json("O produto não foi atualizado");
    }

    return res.status(200).json(produtoAtualizado[0]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirProduto = async (req, res) => {
  const usuarioID = req.usuario.id;
  const { id } = req.params;

  try {
    const produtovalido = await knex("produtos")
      .where("id", id)
      .where("usuario_id", usuarioID);

    if (produtovalido.length === 0) {
      return res.status(404).json("Produto não encontrado");
    }

    const produtoExcluido = await knex("produtos")
      .del()
      .where("id", id)
      .returning("*");

    if (produtoExcluido.length === 0) {
      return res.status(400).json(produtoExcluido);
    }

    return res.status(200).json("Produto excluido com sucesso");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listarProdutos,
  obterProduto,
  cadastrarProduto,
  atualizarProduto,
  excluirProduto,
};
