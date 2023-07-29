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
    else {
      const queryDetalharAutor = `select livros.id, livros.nome, livros.editora, livros.data_publicacao, 
      livros.autor_id from livros join autores on livros.autor_id = autores.id where autores.id = $1
      `;
      const result = await pool.query(queryDetalharAutor, [id]);
      const resultSend = {
        ...rows[0],
        livros: [...result.rows],
      };

      res.json(resultSend);
    }
  } catch (error) {
    res.status(404).json({ message: `${error?.message}` });
  }
};

const listarLivros = async (req, res) => {
  try {
    const query = `select livros.id as livro_id, livros.nome as livro_nome, livros.genero, livros.editora, livros.data_publicacao, autores.* from livros join autores on livros.autor_id = autores.id`;

    const { rows } = await pool.query(query);
    const result = rows.map((row) => {
      const livro = {
        id: row.livro_id,
        nome: row.livro_nome,
        genero: row.editora,
        editora: row.editora,
        data_publicacao: row.data_publicacao,
        autor: {
          id: row.id,
          nome: row.nome,
          idade: row.idade,
        },
      };
      return livro;
    });

    res.json(result);
  } catch (error) {
    res.status(404).json({ message: `${error?.message}` });
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
    res.status(404).json({ message: `${error?.message}` });
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
    res.status(404).json({ message: `${error?.message}` });
  }
};

module.exports = {
  cadastrarAutor,
  pesquisarAutor,
  cadastraLivro,
  listarLivros,
};
