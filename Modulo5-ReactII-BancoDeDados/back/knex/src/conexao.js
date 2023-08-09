const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "tay123",
    database: "postgres",
  },
});

module.exports = knex;
