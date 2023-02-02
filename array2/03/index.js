const palavras = ["arroz", "feijão", "carne", "farinha", "vodka"];

const validacaoCompras = (palavras) => {
  const checandoPresencaBebidasAlcoolicas = palavras.some((item) => {
    return item === "cerveja" || item === "vodka";
  });
  if (checandoPresencaBebidasAlcoolicas) {
    console.log("Revise sua lista, João. Possui bebida com venda proibida!");
  } else console.log("Tudo certo, vamos as compras!");
};

validacaoCompras(palavras);
