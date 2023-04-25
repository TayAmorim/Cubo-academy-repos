const container = document.querySelector("#meuContainer");
const btnNovoElement = document.querySelector("#meuBotao");

btnNovoElement.addEventListener("click", () => {
  const novoElement = document.createElement("p");
  container.appendChild(novoElement);
  novoElement.innerText =
    "Este é um novo elemento adicionado à DOM com JavaScript!";
});
