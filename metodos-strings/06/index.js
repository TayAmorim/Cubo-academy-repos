const celular = 99918888;
function formatacaoCelularNumero(celular) {
  const numeroCelular = String(celular);
  if (numeroCelular.length === 10) {
    let dddCelular = numeroCelular.slice(0, 2);
    let primeiros4Celular = numeroCelular.slice(2, 6);
    let ultimos4Celular = numeroCelular.slice(6, 10);
    let numeroCelularFormatado = `(${dddCelular}) 9 ${primeiros4Celular}-${ultimos4Celular}`;
    return numeroCelularFormatado;
  } else {
    let primeiros4Celular = numeroCelular.slice(0, 4);
    let ultimos4Celular = numeroCelular.slice(4, 10);
    let numeroCelularFormatado = ` 9 ${primeiros4Celular}-${ultimos4Celular}`;
    return numeroCelularFormatado;
  }
}

console.log(formatacaoCelularNumero(celular));
