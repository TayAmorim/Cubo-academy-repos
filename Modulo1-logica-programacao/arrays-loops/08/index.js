const numeros = [3, 24, 1, 8, 11, 7, 15];

let numeroMaior = 0;
for (let numero of numeros) {
  if (numero > numeroMaior) {
    numeroMaior = numero;
  }
}

console.log(numeroMaior);
