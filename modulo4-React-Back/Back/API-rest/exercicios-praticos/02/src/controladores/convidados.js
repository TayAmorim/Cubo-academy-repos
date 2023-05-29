const convidados = require("../bancodedados");

const consultarListaInteiraConvidados = (req, res) => {
  const { nome } = req.query;
  if (!nome) {
    return res.json(convidados);
  }
  const convidadoPresente = convidados.find((convidado) => convidado === nome);
  if (!convidadoPresente) {
    return res
      .status(404)
      .json({ mensagem: "O convidado buscado não está presente na lista." });
  }
  return res.json({ mensagem: "Convidado presente." });
};

module.exports = { consultarListaInteiraConvidados };
