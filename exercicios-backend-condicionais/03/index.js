const ladoA = 6;
const ladoB = 6;

const dominoBucha = ladoA === ladoB ? "SIM" : "NÃO";
const validacao = ladoA >= 1 && ladoA <= 6 && ladoB >= 1 && ladoB <= 6;

if (validacao) {
  console.log(`A peça que você pegou é uma bucha? ${dominoBucha}`);
} else console.log("Digite uma peça válida");
