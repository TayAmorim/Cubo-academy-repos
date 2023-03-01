const cpf = "12345678900";
const cnpj = "12345678000199";

function validacaodados(dado) {
  if (dado === cpf) {
    if (cpf.length === 11) {
      return impressaoPadroes(dado);
    } else {
      return "CPF inválido";
    }
  }
  if (dado === cnpj) {
    if (cnpj.length === 14) {
      return impressaoPadroes(dado);
    } else {
      return "CNPJ Inválido";
    }
  }
}

function impressaoPadroes(dado) {
  if (dado === cpf) {
    dado = cpf;
    let digitos1A3 = dado.slice(0, 3);
    let digitos4a6 = dado.slice(3, 6);
    let digitos5a9 = dado.slice(6, 9);
    let digitos9a11 = dado.slice(9, 11);
    return `${digitos1A3}.${digitos4a6}.${digitos5a9}-${digitos9a11}`;
  } else {
    dado = cnpj;
    let digitos1A2 = dado.slice(0, 2);
    let digitos2A5 = dado.slice(2, 5);
    let digitos5A8 = dado.slice(5, 8);
    let digitos8a12 = dado.slice(8, 12);
    let digitos12A14 = dado.slice(12, 14);
    return `${digitos1A2}.${digitos2A5}.${digitos5A8}/${digitos8a12}-${digitos12A14}`;
  }
}

console.log(validacaodados(cpf));
console.log(validacaodados(cnpj));
