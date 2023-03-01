const nota = 3;

const validacao = nota >= 0 && nota <= 10;

const conceitoA = nota >= 9;
const conceitoB = nota >= 8 && nota <= 8.9;
const conceitoC = nota >= 6 && nota <= 7.9;
const conceitoD = nota >= 4 && nota <= 5.9;

if (validacao) {
  if (conceitoA) {
    console.log("O estudande obteve conceito A");
  } else if (conceitoB) {
    console.log("O estudande obteve conceito B");
  } else if (conceitoC) {
    console.log("O estudande obteve conceito C");
  } else if (conceitoD) {
    console.log("O estudande obteve conceito D");
  } else console.log("O estudando obteve conceito E");
} else {
  console.log("Nota invalida");
}
