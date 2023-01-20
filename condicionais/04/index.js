const ladoA = 6;
const ladoB = 6;

const bucha = ladoA === ladoB;
const validacao = ladoA >= 0 && ladoA <= 6 && ladoB >= 0 && ladoB <= 6;

const branco = !ladoA && ladoB < 1;
const as = ladoA && ladoB === 1;
const duque = ladoA && ladoB === 2;
const terno = ladoA && ladoB === 3;
const quadra = ladoA && ladoB === 4;
const quina = ladoA && ladoB === 5;
const sena = ladoA && ladoB === 6;

if (validacao) {
  if (bucha) {
    console.log("A peça que você pegou é uma bucha");
    if (branco) {
      console.log("Bucha de Branco");
    } else if (as) {
      console.log("Bucha de Ás");
    } else if (duque) {
      console.log("Bucha de Duque");
    } else if (terno) {
      console.log("Bucha de Terno");
    } else if (quadra) {
      console.log("Bucha de Quadra");
    } else if (quina) {
      console.log("Bucha de Quina");
    } else if (sena) {
      console.log("Bucha de Sena");
    }
  } else console.log("A peça que você pegou não é uma bucha");
} else console.log("Digite uma peça válida");
