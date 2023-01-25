const usuarios = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  },
];

for (let usuario of usuarios) {
  usuario.maior_idade = true;
  if (usuario.idade < 17) {
    usuario.maior_idade = false;
  }
  console.log(usuario);
}
