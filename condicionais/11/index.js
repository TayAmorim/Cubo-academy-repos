const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 60;
const totalJaPagoPeloAluno = 1300000;

const inicioDoPagamento = rendaMensalEmCentavos > 200000;
const valorQuitado = totalJaPagoPeloAluno === 1800000;
const quitarMesesCorrido = mesesDecorridos > 60;
const semPagamento = !inicioDoPagamento || valorQuitado || quitarMesesCorrido;

const valorParcelaTaxa = (
  ((18 / 100) * rendaMensalEmCentavos) /
  100
).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

if (inicioDoPagamento && !semPagamento) {
  console.log(`O valor da parcela desse mês é ${valorParcelaTaxa}`);
} else if (semPagamento) {
  if (!inicioDoPagamento) {
    console.log(
      "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais."
    );
  } else if (valorQuitado) {
    console.log(
      "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o valor total do curso foi pago"
    );
  } else if (quitarMesesCorrido) {
    console.log(
      "O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois tempo de 60 meses já foi atigindo"
    );
  }
}
