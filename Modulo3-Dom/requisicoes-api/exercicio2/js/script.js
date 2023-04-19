const pokemonImg = document.querySelector(".pokemon img");
const pokemonNome = document.querySelector(".pokemon h1");
const pokemonAltura = document.querySelector(".pokemon span");

async function detalhesPikachu() {
  const response = await api.get("/pokemon/pikachu");
  const responseImg = response.data.sprites.other.dream_world.front_default;
  pokemonImg.src = `${responseImg}`;
  pokemonNome.innerText = `${response.data.name}`;
  pokemonNome.style.textTransform = "uppercase";
  pokemonAltura.innerText = `A: ${response.data.height} L: ${response.data.weight}cm`;
}

detalhesPikachu();
