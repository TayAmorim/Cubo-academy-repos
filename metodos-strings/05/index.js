const numeroCartao = "1111222233334444";
const primeiros4 = numeroCartao.slice(0, 4);
const ultimos4 = numeroCartao.slice(-4);
let numeroCartaoFormatado = `${primeiros4.padEnd(8, "*")}${ultimos4.padStart(
  8,
  "*"
)}`;

console.log(numeroCartaoFormatado);
