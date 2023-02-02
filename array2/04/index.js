const numeros = [0, 122, 4, 6, 7, 8, 44];

const validacaoNumerosPares = (numeros) => {
  const todosPares = numeros.every((numero) => {
    return numero % 2 === 0;
  });
  if (todosPares) {
    console.log("Array válido");
  } else console.log("Array inválido");
};

validacaoNumerosPares(numeros);
