const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const filtrandoUsuarios = (pessoas) => {
  const filtrarPorIdadeProgramador = pessoas.filter((pessoa) => {
    return (
      pessoa.idade > 20 && pessoa.profissao.toLowerCase() === "programador"
    );
  });
  const filtrarIdadeJornalista = pessoas.filter((pessoa) => {
    return pessoa.idade > 30 && pessoa.profissao.toLowerCase() === "jornalista";
  });
  const filtrarJornalistaEProgramador = pessoas.filter((pessoa) => {
    return (
      pessoa.idade < 29 &&
      (pessoa.profissao.toLowerCase() === "programdor" || "jornalista")
    );
  });

  console.log(filtrarPorIdadeProgramador);
  console.log(filtrarIdadeJornalista);
  console.log(filtrarJornalistaEProgramador);
};

filtrandoUsuarios(pessoas);
