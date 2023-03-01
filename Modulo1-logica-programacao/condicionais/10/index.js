const caractere = "E";

const vogalMaiuscula =
  caractere === "A" ||
  caractere === "E" ||
  caractere === "I" ||
  caractere === "O" ||
  caractere === "U";

const vogalMinuscula =
  caractere === "a" ||
  caractere === "e" ||
  caractere === "i" ||
  caractere === "o" ||
  caractere === "u";

const vogal = vogalMaiuscula || vogalMinuscula;
const numero = isNaN(caractere);
const consoante = !vogal && numero;

if (caractere) {
  if (vogal) {
    if (vogalMaiuscula) {
      console.log("Vogal maiúscula");
    } else console.log("Vogal minúscula");
  } else if (!numero) {
    console.log("Número");
  } else if (consoante) {
    console.log("Consoante");
  }
} else console.log("Caractere vazio");
