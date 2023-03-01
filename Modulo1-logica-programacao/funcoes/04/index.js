const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    this.saldo += valor;
    this.historicos.push({ tipo: "Deposito", valor: valor / 100 });
    return `Deposito de R$ ${this.saldo / 100} realizado para a cliente: ${
      this.nome
    }`;
  },
  sacar: function (valor) {
    if (valor > this.saldo) {
      return `Saldo Insuficiente para o saque de: ${this.nome}`;
    } else {
      this.saldo -= valor;
      this.historicos.push({ tipo: "Saque", valor: valor / 100 });
      return `Saque de R$ ${this.saldo / 100} realizado para o cliente: ${
        this.nome
      }`;
    }
  },
  extrato: function () {
    let saque = " ";
    let deposito = "";
    let valorSaque = 0;
    let valorDeposito = 0;
    console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}`);
    console.log(`Histórico:`);
    for (let i = 0; i < this.historicos.length; i++) {
      if (this.historicos[i].tipo === "Saque") {
        saque = this.historicos[i].tipo;
        valorSaque = this.historicos[i].valor;
      } else if (this.historicos[i].tipo !== "Saque") {
        deposito = this.historicos[i].tipo;
        valorDeposito = this.historicos[i].valor;
      }
    }
    return `${deposito} de R$ ${valorDeposito} ${saque} de R$ ${valorSaque}`;
  },
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
