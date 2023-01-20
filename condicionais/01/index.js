const jogada1 = "tesoura";
const jogada2 = "papel";
const msgjogada1 = `A jogada ganhadora foi ${jogada1}`;
const msgjogada2 = `A jogada ganhadora foi ${jogada2}`;

const empate = jogada1 === jogada2;

const pedraJogada1 = jogada1 === "pedra" && jogada2 === "tesoura";
const pedraJogada2 = jogada2 === "pedra" && jogada1 === "tesoura";

const papelJogada1 = jogada1 === "papel" && jogada2 === "pedra";
const papelJogada2 = jogada2 === "papel" && jogada1 === "pedra";

const tesouraJogada1 = jogada1 === "tesoura" && jogada2 === "papel";
const tesouraJogada2 = jogada2 === "tesoura" && jogada1 === "papel";

if (empate) {
  console.log("Empate");
} else if (pedraJogada1) {
  console.log(msgjogada1);
} else if (pedraJogada2) {
  console.log(msgjogada2);
} else if (papelJogada1) {
  console.log(msgjogada1);
} else if (papelJogada2) {
  console.log(msgjogada2);
} else if (tesouraJogada1) {
  console.log(msgjogada1);
} else if (tesouraJogada2) {
  console.log(msgjogada2);
}
