const diaDaSemana = 8;

const validacao = diaDaSemana < 1 || diaDaSemana > 7;

if (!validacao) {
  if (diaDaSemana === 1) {
    console.log("Segunda-Feira");
  } else if (diaDaSemana === 2) {
    console.log("Terça-Feira");
  } else if (diaDaSemana === 3) {
    console.log("Quarta-Feira");
  } else if (diaDaSemana === 4) {
    console.log("Quinta-Feira");
  } else if (diaDaSemana === 5) {
    console.log("Sexta-Feira");
  } else if (diaDaSemana === 6) {
    console.log("Sábado");
  } else {
    console.log("Domingo");
  }
} else {
  console.log("O dia da semana informado não é válido.");
}
