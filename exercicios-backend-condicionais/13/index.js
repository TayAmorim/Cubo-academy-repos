const tipoDePagamento = "credito";
const valorDoProduto = 13000 / 100;

if (tipoDePagamento === "credito") {
  const desconto = 5 / 100;
  const valorFinal = valorDoProduto - valorDoProduto * desconto;
  console.log(
    `Você escolheu ${tipoDePagamento}, Então o  valor a ser pago: R$ ${valorFinal.toFixed(
      2
    )}`
  );
} else if (tipoDePagamento === "cheque") {
  const desconto = 3 / 100;
  const valorFinal = valorDoProduto - valorDoProduto * desconto;
  console.log(
    `Você escolheu ${tipoDePagamento}, Então o  valor a ser pago: R$ ${valorFinal.toFixed(
      2
    )}`
  );
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  const desconto = 10 / 100;
  const valorFinal = valorDoProduto - valorDoProduto * desconto;
  console.log(
    `Você escolheu ${tipoDePagamento}, Então o valor a ser pago: R$ ${valorFinal.toFixed(
      2
    )}`
  );
}
