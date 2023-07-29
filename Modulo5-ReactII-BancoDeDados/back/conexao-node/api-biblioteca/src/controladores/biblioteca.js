const pool = require("../conexao");

const pesquisarAutor = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(404).json({ mensage: "Id precisa ser um numero" });
  }
  try {
    const query = `select * from autores WHERE id = $1`;
    const { rowCount, rows } = await pool.query(query, [id]);
    if (rowCount === 0)
      return res.status(404).json({ mensage: "Autor não encontrado" });
    else return res.status(200).json(rows[0]);
  } catch (error) {
    console.log(error);
  }
};

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

const cadastraLivro = async (req, res) => {
  const { id } = req.params;
  const { nome, genero, editora, data_publicacao } = req.body;

  try {
    const query = `insert into livros (nome, genero, editora, data_publicacao, autor_id) values ($1, $2, $3, $4, $5)`;
    const params = [nome, genero, editora, data_publicacao, id];
    await pool.query(query, params);
    const queryResult = `select * from livros where nome = $1`;
    const result = await pool.query(queryResult, [nome]);
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { cadastrarAutor, pesquisarAutor, cadastraLivro };
