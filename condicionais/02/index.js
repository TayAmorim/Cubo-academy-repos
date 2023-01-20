const jogada1 = 1;
const jogada2 = 2;

const soma = jogada1 + jogada2;
const par = soma % 2 == 0;

if (jogada1 >= 1 && jogada2 >= 1) {
  if (par) {
    console.log("O ganhador foi aquele que escolheu Par");
  } else {
    console.log("O ganhador foi aquele que escolheu ímpar");
  }
} else {
  console.log("Digite um número válido");
}
