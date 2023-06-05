const produtos = require("../bancodedados/produtos");
const { getStateFromZipcode } = require("utils-playground");

const listarProdutos = (req, res) => {
  res.json(produtos);
};

const detalharProdutoId = (req, res) => {
  const { idProduto } = req.params;

  const produtoFind = produtos.find(
    (produto) => produto.id === Number(idProduto)
  );

  if (!produtoFind) {
    return res.status(404).json({ mensagem: "Produto com Id não encontrado" });
  }

  return res.json(produtoFind);
};

const pegarEstadoEcalcularFrete = async (req, res) => {
  const { idProduto, cep } = req.params;
  const produtoFind = produtos.find(
    (produto) => produto.id === Number(idProduto)
  );
  try {
    const estado = await getStateFromZipcode(cep);
    let percentual = 12 / 100;
    if (
      estado === "BA" ||
      estado === "SE" ||
      estado === "AL" ||
      estado === "PE" ||
      estado === "PB"
    ) {
      percentual = 10 / 100;
    }
    if (estado === "SP" || estado === "RJ") {
      percentual = 15 / 100;
    }
    const calculoDeFrete = produtoFind.valor * percentual;

    const produtoCompleto = {
      produto: {
        ...produtoFind,
      },
      estado,
      calculoDeFrete,
    };

    res.json(produtoCompleto);
  } catch (error) {
    if (!produtoFind) {
      return res
        .status(404)
        .json({ mensagem: "Produto com Id não encontrado" });
    }

    if (!cep) {
      return res.status(404).json({ mensagem: "O cep precisa ser informado" });
    }
  }
};

module.exports = {
  listarProdutos,
  detalharProdutoId,
  pegarEstadoEcalcularFrete,
};
