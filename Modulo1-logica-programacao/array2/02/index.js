const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verficandoLimiteCaracteres = (palavras) => {
  const verificandoCaracteres = palavras.some((palavra) => {
    return palavra.length > 5;
  });
  if (verificandoCaracteres) {
    console.log("Existe palavra inválida");
  } else console.log("Array validado");
};

verficandoLimiteCaracteres(palavras);
