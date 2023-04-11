const btn = document.querySelector(".meu-botao");
const titulo = document.querySelector(".meu-titulo");

btn.addEventListener("click", () => {
  titulo.textContent = "Olá dev!";
});
