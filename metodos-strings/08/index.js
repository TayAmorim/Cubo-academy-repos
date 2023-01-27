let cpf = "011.022.033-44";

while (cpf !== cpf.replace(".", "")) {
  cpf = cpf.replace(".", "");
  cpf = cpf.replace("-", "");
}

console.log(cpf);
