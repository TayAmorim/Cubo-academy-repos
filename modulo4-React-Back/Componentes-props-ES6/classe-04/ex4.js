const classA = ["Daniel", "Guido", "Léo", "Vitor", "Ruliana", "Diego", "José"];
const classB = ["Marcos", "Maria", "Juliana", "Cristina", "Paula"];
const classC = ["Marcela", "Pedro", "João", "Jorge", "Carlos", "Henrique"];

let [nome1, nome2, nome3] = classC;
let allClasses = [...classA, ...classB, nome1, nome2, nome3];

console.log(allClasses);
