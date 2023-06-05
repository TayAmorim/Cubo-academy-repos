const produtos = require("../bancodedados");
const fs = require("fs/promises");

const listarProdutos = async (req, res) => {
  return res.status(200).json(produtos);
};

const vendas = async (req, res) => {
  const { produto_id, quantidade } = req.body;

  const produtosEncontrado = produtos.find(
    (produtos) => produtos.id === Number(produto_id)
  );

  if (!produtosEncontrado) {
    return res.status(404).json({ mensagem: "O produto não foi encontrado" });
  }
  try {
    const vendas = await fs.readFile("./src/vendas.json");
    const parseVendas = JSON.parse(vendas);
    parseVendas.vendas.push({
      produto: produtosEncontrado,
      quantidade,
    });

    await fs.writeFile("./src/vendas.json", JSON.stringify(parseVendas));
    return res.status(201).json("Vendas registradas com sucesso");
  } catch (error) {
    return res.status(500).json("Erro do servidor");
  }
};

module.exports = { listarProdutos, vendas };
