const imoveis = require("../banco-de-dado");

const pegarImoveis = (res) => {
  res.send(imoveis);
};

const filtrarImoveis = (req, res) => {
  const { id } = req.params;

  const filtro = imoveis.find((imovel) => {
    return imovel.id === Number(id);
  });
  console.log(filtro);
  res.send(filtro);
};

module.exports = { pegarImoveis, filtrarImoveis };
