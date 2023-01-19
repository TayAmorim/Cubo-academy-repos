const alturaEmCm = 152;
const filtro = 180;
const peneiraVolei = alturaEmCm >= filtro ? "APROVADO" : "REPROVADO";

console.log(
  `Você foi ${peneiraVolei} no processo seletivo para novos jogadores`
);
