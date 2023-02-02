const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

function encontrarPet(usuarios, pet) {
  const petConvertido = pet.toLowerCase();

  for (let usuario of usuarios) {
    const nomesPetsConvertido = usuario.pets.join().toLowerCase();
    if (nomesPetsConvertido.includes(petConvertido)) {
      console.log(`O Dono(a) do(a) ${pet} é o(a) ${usuario.nome}`);
    }
  }
}

encontrarPet(usuarios, "Batata");
