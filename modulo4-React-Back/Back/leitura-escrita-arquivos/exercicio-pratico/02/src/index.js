const express = require("express");
const { listarPokemons, detalharPokemon } = require("utils-playground");
const app = express();
app.use(express.json());

app.get("/pokemon", async (req, res) => {
  try {
    const response = await listarPokemons();
    const pokemon = await response.results;
    res.json(pokemon);
  } catch (error) {
    console.log(error);
  }
});

app.get("/pokemon/:dado", async (req, res) => {
  const { dado } = req.params;
  let pokemon;
  try {
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
  } catch (error) {}
});

app.listen(8000);
