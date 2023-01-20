const idade = 17;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

const acessoNegado =
  idade < 12 || idade > 65 || possuiPatologia || altura < 150;

const ingresso10 = idade < 18 || ehEstudante;

if (acessoNegado) {
  console.log("ACESSO NEGADO");
} else if (ingresso10) {
  console.log("O valor do seu ingresso é 10 reais para poder brincar");
} else {
  console.log("O valor do seu ingresso é 20 reais para poder brincar");
}
