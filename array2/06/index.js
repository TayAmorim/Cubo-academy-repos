const cidades = ["Bahia", "Gramado", "Brasilia", "Recife", "Rio de Janeiro"];

const filtrandoCidades = (cidades) => {
  const cidadesFiltradas = cidades.filter((cidade) => {
    return cidade.length <= 8;
  });
  console.log(cidadesFiltradas.join(", "));
};

filtrandoCidades(cidades);
