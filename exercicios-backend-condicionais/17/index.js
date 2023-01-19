const valorDoProduto = 100000 / 100;
const quantidadeDoParcelamento = 12;
const valorPago = 300;

const valorParcela = valorDoProduto / quantidadeDoParcelamento;
const qtDeParcelasParaPagar = Math.abs(
  Math.round(valorPago / valorParcela) - quantidadeDoParcelamento
);

if (quantidadeDoParcelamento > qtDeParcelasParaPagar) {
  console.log(
    `Restam ${qtDeParcelasParaPagar} parcelas de ${valorParcela.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    )}`
  );
}
