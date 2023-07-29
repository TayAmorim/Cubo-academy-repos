const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "tay123",
  database: "biblioteca",
});

module.exports = pool;
