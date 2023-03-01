const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

const localizarLivro = (livros, nomeDoLivro) => {
  const localizacaoLivroEstante = livros.findIndex((livro) => {
    return livro === nomeDoLivro;
  });
  if (localizacaoLivroEstante === -1) {
    console.log(`A biblioteca não possui o livro no seu acervo`);
  } else {
    console.log(`O livro está na posição ${localizacaoLivroEstante + 1}`);
  }
};

localizarLivro(livros, nomeDoLivro);
