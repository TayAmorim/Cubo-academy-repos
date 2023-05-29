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

const adicionarLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = {
    id: idLivros++,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  livros.push(livro);
  return res.json(livro);
};

const substituirLIvro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livroPesquisado = livros.find((livro) => livro.id === Number(id));

  if (!livroPesquisado) {
    return res.status(404).json({
      mensagem: "Não existe livro a ser substituído para o ID informado.",
    });
  }

  livroPesquisado.titulo = titulo;
  livroPesquisado.autor = autor;
  livroPesquisado.ano = ano;
  livroPesquisado.numPaginas = numPaginas;

  return res.json({
    mensagem: "Livro substituído.",
  });
};

module.exports = {
  consultarColecao,
  consultarLivroId,
  adicionarLivro,
  substituirLIvro,
};
