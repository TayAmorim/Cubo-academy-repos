const usuarios = [
  {
    nome: "João",
    pets: [],
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

let qtdPets = 0;

for (let usuario of usuarios) {
  const { nome, pets } = usuario;
  if (pets.length === 0) {
    console.log(`Sou ${nome} e não tenho pet`);
  } else {
    qtdPets = pets.length;
    console.log(`Sou ${nome} e tenho ${qtdPets} pet`);
  }
}
