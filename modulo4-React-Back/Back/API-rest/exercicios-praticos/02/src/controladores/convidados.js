let convidados = require("../bancodedados");

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

const adicionarConvidado = (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ mensagem: "É necessário informar um nome" });
  }

  const convidadoPresente = convidados.find((convidado) => convidado === nome);
  if (convidadoPresente) {
    return res.status(404).json({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  }
  if (!convidadoPresente) {
    convidados.push(nome);
    return res.json({ mensagem: "Convidado adicionado." });
  }
};

const deletarConvidado = (req, res) => {
  const { nome } = req.params;

  const convidadoPresente = convidados.find((convidado) => convidado === nome);
  if (!convidadoPresente) {
    return res.status(404).json({
      mensagem:
        "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
    });
  }
  convidados = convidados.filter(
    (convidado) => convidado !== convidadoPresente
  );
  return res.json({ mensagem: "Convidado removido." });
};

module.exports = {
  consultarListaInteiraConvidados,
  adicionarConvidado,
  deletarConvidado,
};
