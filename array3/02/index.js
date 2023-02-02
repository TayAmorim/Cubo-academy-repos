const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, valorAtual, indice, array) => {
  if (acumulador.length > valorAtual.length) {
    return acumulador;
  }
  return valorAtual;
});

console.log(maiorString);
