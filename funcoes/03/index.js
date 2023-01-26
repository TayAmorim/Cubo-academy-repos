const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
};

function imprimirResumoDoCarrinho(carrinho) {
  let totalItens = 0;
  let totalPagar = 0;
  for (let qtdItem of carrinho.produtos) {
    totalItens += qtdItem.qtd;
    totalPagar += (qtdItem.qtd * qtdItem.precoUnit) / 100;
  }
  return `
  Cliente: ${carrinho.nomeDoCliente}
  Total de Itens: ${totalItens} itens
  Total a pagar: R$ ${totalPagar.toFixed(2)}`;
}

console.log(imprimirResumoDoCarrinho(carrinho));
