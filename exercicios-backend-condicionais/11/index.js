const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 60;
const totalJaPagoPeloAluno = 1000000;

const naoPagaNada = mesesDecorridos > 60 || totalJaPagoPeloAluno === 1800000;
const inicioDoPagamento = rendaMensalEmCentavos > 2000000;
const valorParcelaTaxa = (
  ((18 / 100) * rendaMensalEmCentavos) /
  100
).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(valorParcelaTaxa);

if (inicioDoPagamento) {
}
