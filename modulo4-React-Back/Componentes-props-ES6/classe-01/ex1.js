function sum(...props) {
  const soma = props.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  });
  return soma;
}

console.log(sum(1, 3, 4, 5, 6, 7, 8, 9, 0, 5));
