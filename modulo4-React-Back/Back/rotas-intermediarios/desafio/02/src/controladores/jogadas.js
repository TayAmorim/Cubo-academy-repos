const jogadores = require("../bancodedados");
let index = 0;
const mostrarJogador = (req, res) => {
  if (index >= jogadores.length) {
    index = 0;
  }
  res.send(`É a vez de ${jogadores[index]} jogar!`);
  index++;
};

const removerJogador = (req, res) => {
  const { indice } = req.query;
  jogadores.splice(indice, 1);
  res.send(jogadores);
};

module.exports = { mostrarJogador, removerJogador };
