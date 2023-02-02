const numeros = [1, 98, -76, 0, 122, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, valorAtual) => {
  if (acumulador > valorAtual) {
    return acumulador;
  }
  return valorAtual;
});

console.log(maiorNumero);
