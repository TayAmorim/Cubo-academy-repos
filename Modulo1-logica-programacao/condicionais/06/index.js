const alturaEmCm = 152;
const filtro = 180;
const peneiraVolei = alturaEmCm >= filtro;

const libero = alturaEmCm >= 180 && alturaEmCm <= 185;
const ponteiro = alturaEmCm >= 186 && alturaEmCm <= 195;
const oposto = alturaEmCm >= 196 && alturaEmCm < 205;
const central = alturaEmCm >= 205;

if (peneiraVolei) {
  if (libero) {
    console.log("Sua posição é LÍBERO");
  } else if (ponteiro) {
    console.log("Sua posição é PONTEIRO");
  } else if (oposto) {
    console.log("Sua posição é OPOSTO");
  } else {
    console.log("Sua posição é CENTRAL");
  }
} else {
  console.log("Você foi reprovado");
}
