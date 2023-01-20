const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

const novoArray = [];
let soma = 0;
for (let numero of numeros) {
  if (numero % 2 === 0) {
    novoArray.push(numero);
  }
}

for (let i = 0; i < novoArray.length; i++) {
  soma += novoArray[i];
}

console.log(soma);
