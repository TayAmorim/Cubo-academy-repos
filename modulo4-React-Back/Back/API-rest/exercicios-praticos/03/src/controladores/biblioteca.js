let { idLivros, livros } = require("../bancodedados");

const consultarColecao = (req, res) => {
  res.json(livros);
};

const consultarLivroId = (req, res) => {
  const { id } = req.params;
  const livroPesquisado = livros.find((livro) => livro.id === Number(id));
  if (!Number(id)) {
    return res.status(400).json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  }

  if (!livroPesquisado) {
    return res.status(404).json({
      mensagem: "Não existe livro para o ID informado.",
    });
  }
  return res.json(livroPesquisado);
};

module.exports = { consultarColecao, consultarLivroId };
