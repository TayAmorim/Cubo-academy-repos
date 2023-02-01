const nomes = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 0;

function gruposCarros(nomes, posicao) {
  const copia = nomes.slice(posicao, posicao + 3);
  console.log(copia.join("-"));
}

gruposCarros(nomes, posicao);
