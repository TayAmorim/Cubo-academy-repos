const nomeIdade = document.querySelector("#nome-idade");
const btn = document.querySelector("button");
const alert = document.querySelector(".alert");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const filterNomeIdade = nomeIdade.value.split("");
  const filterNome = filterNomeIdade
    .filter((nome) => {
      if (isNaN(nome)) {
        return nome;
      }
    })
    .join("");
  const filterIdade = filterNomeIdade
    .filter((idade) => {
      if (!isNaN(idade)) {
        return idade;
      }
    })
    .join("");
  if (filterNome.length > 5 && filterIdade.length > 0) {
    alert.innerText = "Cadastro permitido";
  } else {
    alert.innerText = "Nome e idade são necessários";
  }
});
