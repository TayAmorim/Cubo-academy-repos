const quantidadeDeAguaIngerida = 1;

const riscoAlto = quantidadeDeAguaIngerida < 1.5;
const riscoModerado =
  quantidadeDeAguaIngerida > 1.5 && quantidadeDeAguaIngerida <= 3;
const riscoBaixo = quantidadeDeAguaIngerida > 3;

if (riscoAlto) {
  console.log(
    "Risco Alto - Você está ingerindo pouquissima água, beba mais água!"
  );
} else if (riscoModerado) {
  console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
} else {
  console.log(
    "Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!"
  );
}
