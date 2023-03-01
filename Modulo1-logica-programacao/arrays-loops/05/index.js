const numeros = [1, 4, 12, 21, 53, 88, 112];
const novoArray = [];

for (let numero of numeros) {
  if (numero % 2 === 0) {
    novoArray.push(numero);
  }
}
console.log(novoArray);
