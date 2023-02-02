const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const caracteresFiltro = "a";

const filtrandoNomePorLetra = (nomes, caracteresFiltro) => {
  const nomesFiltrado = nomes.filter((nome) => {
    return (
      nome[0] === caracteresFiltro ||
      nome[0] === caracteresFiltro.toLocaleUpperCase()
    );
  });
  if (nomesFiltrado.length === 0) {
    console.log(
      `Não foi encontrado nenhum nome que começa com a letra ${caracteresFiltro} `
    );
  } else {
    console.log(nomesFiltrado);
  }
};

filtrandoNomePorLetra(nomes, caracteresFiltro);
