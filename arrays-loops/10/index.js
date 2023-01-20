const numeros = [8, 11, 12, 1];
const diferenca = [];
let maiorNumero = 0;

for (let i = 1; i < numeros.length; i++) {
  let diminuir = Math.abs(numeros[0] - numeros[i]);
  diferenca.push(diminuir);
}

for (let i = 2; i < numeros.length; i++) {
  let diminuir = Math.abs(numeros[1] - numeros[i]);
  diferenca.push(diminuir);
}

for (let i = 3; i < numeros.length; i++) {
  let diminuir = Math.abs(numeros[2] - numeros[i]);
  diferenca.push(diminuir);
}

console.log(diferenca);

for (let numero of diferenca) {
  if (numero > maiorNumero) {
    maiorNumero = numero;
  }
}

console.log(maiorNumero);
