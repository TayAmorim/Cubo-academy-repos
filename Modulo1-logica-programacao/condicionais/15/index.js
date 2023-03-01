const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "Bros";

if (primeiroNome) {
  if (primeiroNome && !sobrenome && !apelido) {
    console.log(`${primeiroNome}`);
  } else if (primeiroNome && apelido && !sobrenome) {
    console.log(`${primeiroNome} ${apelido}`);
  } else {
    console.log(`${primeiroNome} ${sobrenome}`);
  }
} else {
  console.log("É necesessário que você digite um nome");
}
