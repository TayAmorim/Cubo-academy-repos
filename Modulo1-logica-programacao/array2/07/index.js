const enderecos = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const buscadorCep = (enderecos, cep) => {
  const ruaDoCep = enderecos.find((endereco) => {
    return endereco.cep === cep;
  });
  if (ruaDoCep === undefined) {
    console.log("Endereço não encontrado");
  } else console.log(ruaDoCep.rua);
};

buscadorCep(enderecos, 00222444);
