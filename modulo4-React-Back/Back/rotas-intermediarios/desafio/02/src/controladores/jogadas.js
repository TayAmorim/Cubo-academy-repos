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
  const lengthJogadores = jogadores.length;
  if (indice >= lengthJogadores) {
    res.send(`Não existe jogador no índice informado ${indice} para ser removido.
   `);
  }
  jogadores.splice(indice, 1);
  res.send(jogadores);
};

const adicionarJogadores = (req, res) => {
  const { nome, indice } = req.query;
  const nomeFormatado = nome.split(" ");
  const lengthJogadores = jogadores.length;
  let novoNome = nomeFormatado
    .map((letra) => {
      return letra[0].toUpperCase() + letra.substring(1);
    })
    .join(" ");

  if (indice && indice <= lengthJogadores) {
    jogadores.splice(indice, 0, novoNome);
    return res.send(jogadores);
  }
  if (indice > lengthJogadores) {
    return res.send(
      `O índice informado ${indice} não existe no array. Novo jogador não foi adicionado.`
    );
  }
  jogadores.push(novoNome);
  res.send(jogadores);
};

module.exports = { mostrarJogador, removerJogador, adicionarJogadores };
