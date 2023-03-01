const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesFiltro = [];

for (let nome of nomes) {
  if (nome[0] === "a" || nome[0] === "A") {
    nomesFiltro.push(nome);
  }
}
console.log(nomesFiltro);
