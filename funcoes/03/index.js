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
  imprimirResumo: function () {
    let totalItens = 0;
    let totalPagar = 0;
    for (let qtdItem of this.produtos) {
      totalItens += qtdItem.qtd;
      totalPagar += (qtdItem.qtd * qtdItem.precoUnit) / 100;
    }
    return `
    Cliente: ${this.nomeDoCliente}
    Total de Itens: ${totalItens} itens
    Total a pagar: R$ ${totalPagar.toFixed(2)}`;
  },
};

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};
const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

function addProdutoAoCarrinho(carrinho, produto) {
  for (let i = 0; i < carrinho.produtos.length; i++) {
    if (carrinho.produtos[i].id === produto.id) {
      carrinho.produtos[i].qtd += produto.qtd;
    }
    if (
      carrinho.produtos[i].id !== produto.id &&
      carrinho.produtos[i + 1].id !== produto.id
    ) {
      carrinho.produtos.push(produto);
      break;
    }
  }
}

/* function addProdutoAoCarrinho(carrinho, produto) {
  for (let item of carrinho.produtos) {
    if (item.id === produto.id) {
      item.qtd += produto.qtd;
      console.log(item.id);
    }
    if (item.id !== produto.id) {
      carrinho.produtos.push(produto);
      break;
    }
  }
} */
addProdutoAoCarrinho(carrinho, novaBermuda);
addProdutoAoCarrinho(carrinho, novoTenis);
console.log(carrinho.imprimirResumo());
console.log(carrinho.produtos);
