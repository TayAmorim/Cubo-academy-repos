const transport = require("../email");
const compiladorHtml = require("../utils/compiladorHtml");

const cadastrar = async (req, res) => {
  const { nome, email } = req.body;

  html = await compiladorHtml("./src/templates/newsletter.html", {
    nomeUsuario: nome,
    email,
  });

  transport.sendMail({
    from: `${process.env.MAIL_NAME} <${process.env.MAIL_FROM}>`,
    to: `${nome} <${email}>`,
    subject: "Bem vindo a Newsletter",
    html,
  });
  return res.json("nome e email cadastrado");
};

module.exports = { cadastrar };
