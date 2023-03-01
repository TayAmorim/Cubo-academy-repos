const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const filtroNumerosInteros = (numeros) => {
  const numerosInteros = numeros.filter((numero) => {
    return numero > 1;
  });
  console.log(numerosInteros);
};

filtroNumerosInteros(numeros);
