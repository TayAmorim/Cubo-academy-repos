const ladoA = 6;
const ladoB = 6;

const dominoBucha = ladoA === ladoB ? "SIM" : "NÃO";
const validacao = ladoA >= 0 && ladoA <= 6 && ladoB >= 0 && ladoB <= 6;

if (validacao) {
  console.log(`A peça que você pegou é uma bucha? ${dominoBucha}`);
  if (ladoA === ladoB) {
  }
} else console.log("Digite uma peça válida");
