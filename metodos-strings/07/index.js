function verificacaoEmail(email) {
  const ultimoIndex = email.length - 1;
  const inicialPonto = email[0] === "." || email[ultimoIndex] === ".";
  if (email.includes("@") && email.includes(".") && !inicialPonto) {
    console.log("E-mail válido");
  } else {
    console.log("E-mail inválido");
  }
}

verificacaoEmail(".messias@cubos");
