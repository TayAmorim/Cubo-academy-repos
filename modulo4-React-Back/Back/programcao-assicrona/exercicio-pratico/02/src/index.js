const express = require("express");
const { listarPokemons, detalharPokemon } = require("utils-playground");
const app = express();

app.use(express.json());

app.get("/pokemon", async (req, res) => {
  const response = await listarPokemons();
  const pokemon = await response.results;

  res.json(pokemon);
});

app.get("/pokemon/:dado", async (req, res) => {
  const { dado } = req.params;
  let pokemon;
  if (Number(dado)) {
    pokemon = await detalharPokemon(dado);
  }
  pokemon = await detalharPokemon(dado);
  const {
    id,
    name,
    height,
    weight,
    base_experience,
    forms,
    abilities,
    species,
  } = await pokemon;
  const pokemonFilter = {
    id,
    name,
    height,
    weight,
    base_experience,
    forms,
    abilities,
    species,
  };
  return res.json(pokemonFilter);
});

app.listen(8000);
