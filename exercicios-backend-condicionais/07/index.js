const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 1500000; //emCentavos
const rendimentoMinimo = 2855970;

const isenta = aposentada || portadoraDeDoenca;
const pegaLeao = !isenta && totalDeRendimentos > rendimentoMinimo;
const semRendimentoM = totalDeRendimentos < rendimentoMinimo;

if (isenta) {
  console.log("ISENTA");
} else if (pegaLeao) {
  console.log("PEGA LEAO");
} else if (semRendimentoM) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}
