//a
const numerosCrecente = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numerosCrecente.sort((a, b) => {
  return a - b;
});
console.log(numerosCrecente);

//b
const numerosDecrescente = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numerosDecrescente.sort((a, b) => {
  return b - a;
});
console.log(numerosDecrescente);

//c
const numerosCrescenteUnicode = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numerosCrescenteUnicode.sort();
console.log(numerosCrescenteUnicode);

//d
const arrayOrdemAlfabetica = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
arrayOrdemAlfabetica.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(arrayOrdemAlfabetica);

//e
const arrayOrdemAlfabeticaDescrecente = [
  "Banana",
  "Amora",
  "abacaxi",
  "uva",
  "Pera",
];
arrayOrdemAlfabeticaDescrecente.sort((a, b) => {
  return b.localeCompare(a);
});
console.log(arrayOrdemAlfabeticaDescrecente);

//f
const frutas = ["goiaba", "Amora", "abacaxi", "jabuticaba", "Pera"];
frutas.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  }
});
console.log(frutas);
