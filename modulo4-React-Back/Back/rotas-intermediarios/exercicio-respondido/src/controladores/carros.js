const carros = require("../bancodedados");

const listagemCarros = (req, res) => {
  const { marca, cor } = req.query;
  let resultado = carros;

  if (marca) {
    resultado = resultado.filter((carro) => {
      return carro.marca === marca;
    });
  }
  if (cor) {
    resultado = resultado.filter((carro) => {
      return carro.cor === cor;
    });
  }
  res.send(resultado);
};

const obeterCarro = (req, res) => {
  const { id } = req.params;
  const carroEncontrado = carros.find((carro) => {
    return carro.id === Number(id);
  });
  res.send(carroEncontrado);
};

module.exports = { listagemCarros, obeterCarro };
