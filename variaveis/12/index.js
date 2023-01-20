let montante = 90000;
let capital = 60000;
let nDeMeses = 24;

let taxaDeJuros = Math.pow(montante / capital, 1 / nDeMeses) - 1;
let taxaDeJurosPorcent = (taxaDeJuros * 100).toFixed(4);

console.log(
  `O seu Financiamento de ${capital} reais teve uma taxa de ${taxaDeJurosPorcent}%, pois após ${nDeMeses} meses você teve que pagar ${montante} reais`
);
