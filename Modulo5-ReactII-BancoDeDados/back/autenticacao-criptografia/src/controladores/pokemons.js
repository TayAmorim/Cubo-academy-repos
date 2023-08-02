const pool = require("../conexao");

const cadastrarPOkemon = async (req, res) => {
  const { nome, habilidades, imagem, apelido } = req.body;
  const { id } = req.usuario;

  try {
    const query =
      "insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2, $3, $4, $5) returning *";
    const params = [id, nome, habilidades, imagem, apelido];
    const novoPokemon = await pool.query(query, params);
    res.status(201).json(novoPokemon.rows[0]);
  } catch (error) {
    res.status(error.status).json({ message: `${error?.message}` });
  }
};

module.exports = {
  cadastrarPOkemon,
};
