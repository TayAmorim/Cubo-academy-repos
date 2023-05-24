const somar = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) + Number(num2);
  res.send(resultado.toString());
};

const subtrair = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) - Number(num2);
  res.send(resultado.toString());
};

const multiplicar = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) * Number(num2);
  res.send(resultado.toString());
};

const dividir = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = Number(num1) / Number(num2);
  res.send(resultado.toString());
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};
