const numeros = [54, 23, 10, 87, 284];
let array = [];
for (let i = 0; i < numeros.length; i++) {
  let caixa = i;
  if (numeros[i] === 10) {
    array.push(numeros[caixa]);
    console.log(caixa);
  }
}
if (array.length === 0) {
  console.log("-1");
}
