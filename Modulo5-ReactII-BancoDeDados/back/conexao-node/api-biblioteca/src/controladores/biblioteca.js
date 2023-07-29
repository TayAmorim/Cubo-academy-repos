const pool = require("../conexao");

const cadastrarAutor = async (req, res) => {
  const { nome, idade } = req.body;

  try {
    const quey = `insert into autores (nome, idade) values ($1, $2)`;
    await pool.query(quey, [nome, idade]);
    const queryResult = `select * from autores where nome = $1`;
    const result = await pool.query(queryResult, [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { cadastrarAutor };
