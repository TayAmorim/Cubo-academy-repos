const idadeDoAluno = 18;
const possuiResponsavel = false;

const precisaResponsavel = idadeDoAluno >= 18;

if (precisaResponsavel) {
  console.log("Rematrícula realizada com sucesso");
} else if (!precisaResponsavel && possuiResponsavel) {
  if (possuiResponsavel) {
    console.log("Rematrícula realizada com sucesso");
  }
} else console.log("Não é possível fazer a rematrícula");
