// Crie uma função que retorna o resultado da soma de dois números:
// Valores de entrada: 2 e 3
// Resultado esperado: 5
/* 
function soma(...args) {
  const resultado = args.reduce((element, elementAtual) => {
    return element + elementAtual;
  });
  return resultado;
}

console.log(soma(2, 3));
 */

// 2 - Crie uma função que retorna um
// novo array com cada item duplicado:
// Valores de entrada: [1, 2, 3, 4, 5]
// Resultado esperado: [2, 4, 6, 8, 10]

/* function multi(args) {
  const resultado = args.map((valor) => {
    return valor * 2;
  });
  return resultado;
}

console.log(multi([1, 2, 3, 4, 5])); */

//3 -Crie uma função que filtra os números ímpares em um array:
// Valores de entrada: [1, 2, 3, 4, 5]
// Resultado esperado: [1, 3, 5]

/* function filterImpar(numeros) {
  const impares = numeros.filter((numero) => {
    return numero % 2 !== 0;
  });
  return impares;
}

console.log(filterImpar([1, 11, 3, 4, 5])); */

//Utilize o operador spread para unir dois arrays:
//Valores de entrada: [1, 2, 3] e [4, 5, 6];
// Resultado esperado: [1, 2, 3, 4, 5, 6]

/* const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const arrayAeB = [...arrayA, ...arrayB];
console.log(arrayAeB);
 */

// Utilize destructuring para extrair valores de um objeto:
//Valores de entrada: { nome: "João", idade: 30, endereco: { rua: "Rua A", numero: 123 }
//Resultado esperado: João 30 Rua A
/* const user = {
  nome: "João",
  idade: 30,
  endereco: { rua: "Rua A", numero: 123 }
};

const { nome, endereco } = user;
 console.log(nome, endereco.rua);
  */

// 7. Utilize o operador spread para copiar um array:
//- Valores de entrada: [1, 2, 3, 4, 5];
//- Resultado esperado: [1, 2, 3, 4, 5,6]

/* const arrayA = [1, 2, 3, 4, 5];
const novoArray = [...arrayA, 6];
console.log(novoArray); */

//8. Utilize destructuring para extrair valores de uma array:
//- Valores de entrada: [1, 2, 3, 4, 5];
//- Resultado esperado: 1 2 [3, 4, 5]

/* const arrayA = [1, 2, 3, 4, 5];
const [numero1, numero2, ...rest] = arrayA;

console.log(numero1, numero2, rest); */
