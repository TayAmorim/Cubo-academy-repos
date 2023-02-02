const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

function inversao(dados) {
  const frutasNova = dados.slice(0);
  frutasNova.reverse();
  console.log(frutasNova.join());
}
inversao(frutas);
frutas.shift();
frutas.pop();
frutas.push("Melão");
console.log(frutas);
