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
    return `
    Cliente: ${this.nomeDoCliente}
    Total de Itens: ${this.calcularTotalDeItens()} itens
    Total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)}\n`;
  },
  addProduto: function (produto) {
    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id === produto.id) {
        this.produtos[i].qtd += produto.qtd;
      }
      if (
        this.produtos[i].id !== produto.id &&
        this.produtos[i + 1].id !== produto.id
      ) {
        this.produtos.push(produto);
        break;
      }
    }
  },
  imprimirDetalhe: function () {
    let numeroItem = 0;
    let totalPagarUnidade = 0;

    console.log(`\nCliente: ${this.nomeDoCliente}\n`);
    for (let i = 0; i < this.produtos.length; i++) {
      numeroItem += 1;
      totalPagarUnidade =
        (this.produtos[i].precoUnit * this.produtos[i].qtd) / 100;
      console.log(
        `${numeroItem} - ${this.produtos[i].nome} - ${
          this.produtos[i].qtd
        } und - R$ ${totalPagarUnidade.toFixed(2)}`
      );
    }
    console.log(`\nTotal de itens: ${this.calcularTotalDeItens()}`);
    console.log(`Total a Pagar itens: ${this.calcularTotalAPagar()}`);
  },
  calcularTotalDeItens: function () {
    let totalItens = 0;
    for (let qtdItem of this.produtos) {
      totalItens += qtdItem.qtd;
    }
    return totalItens;
  },
  calcularTotalAPagar: function () {
    let totalPagar = 0;
    for (let qtdItem of this.produtos) {
      totalPagar += (qtdItem.qtd * qtdItem.precoUnit) / 100;
    }
    return totalPagar;
  },
  calcularDesconto: function () {
    let menorPreco = 0;
    let desconto10 = 0;
    let desconto = 0;
    const totalDeItens = this.calcularTotalDeItens();
    const totalPagar = this.calcularTotalAPagar();
    if (totalDeItens > 4) {
      for (let i = 0; i < this.produtos.length; i++) {
        if (this.produtos[i].precoUnit < menorPreco || menorPreco === 0) {
          menorPreco = this.produtos[i].precoUnit / 100;
        }
      }
      desconto10 = Math.abs(totalPagar - (totalPagar * 10) / 100 - totalPagar);
    }
    if (totalPagar > 100 && desconto10 > menorPreco) {
      desconto = desconto10;
      return desconto;
    } else {
      desconto = menorPreco;
      return desconto;
    }
  },
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
console.log(`R$ ${carrinho.calcularDesconto()}`);
