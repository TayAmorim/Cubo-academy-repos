const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

for (let i = 0; i <= filaDeFora.length; i++) {
  if (filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora[i - i]);
    filaDeFora.shift(i);
  }
}

console.log(filaDeDentro);
console.log(filaDeFora);
