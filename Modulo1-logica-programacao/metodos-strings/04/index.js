let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let arrayNomeSobrenome = nome.split(" ");
let nomeFormatado = "";
email = email.trim();

if (identificador.length < 6) {
  identificador = identificador.padStart(6, 0);
}

for (let nomes of arrayNomeSobrenome) {
  let primeiraLetra = nomes.slice(0, 1);
  let restoNome = nomes.slice(1);
  nomeFormatado += ` ${primeiraLetra.toUpperCase()}${restoNome}`;
  nome = nomeFormatado.trim();
}

console.log(identificador);
console.log(nome);
console.log(email);
