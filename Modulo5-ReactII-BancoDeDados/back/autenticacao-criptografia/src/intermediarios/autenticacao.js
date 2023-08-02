const jwt = require("jsonwebtoken");
const pool = require("../conexao");
const senhaJwt = require("../senhaJwt");

const verificarUsuariosLogado = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Não autorizado" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, senhaJwt);
    const { rows, rowCount } = await pool.query(
      "select * from usuarios where id = $1",
      [id]
    );
    if (rowCount < 1) {
      return res.status(401).json({ mensagem: "Não autorizado" });
    }
    req.usuario = rows[0];
    next();
  } catch (error) {
    res.status(404).json({ message: `${error?.message}` });
  }
};

module.exports = verificarUsuariosLogado;
