let capital = 1000.0;
let taxaFixa = 0.125;
let tempo = 5;

let montante = capital * Math.pow(1 + taxaFixa, 5);

console.log(Math.round(montante));
