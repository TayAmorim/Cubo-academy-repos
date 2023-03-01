const letras = ["A", "a", "B", "C", "E", "e"];
let soma = 0;
for (let letra of letras) {
  if (letra === "e" || letra === "E") {
    soma += 1;
  }
}

if (soma === 1 || soma < 1) {
  console.log(`Foi encontrada apenas ${soma} letra "E" ou "e".`);
} else if (soma > 1) {
  console.log(`Foram encontradas ${soma} letras "E" ou "e".`);
} else console.log('Nenhuma letra "E" ou "e" foi encontrada.');
