const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "tay123",
  database: "catalogo_pokemons",
});

module.exports = pool;
