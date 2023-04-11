const titulo = document.querySelector("#meu-titulo");

titulo.addEventListener("mouseover", () => {
  titulo.classList.add("fonte-maior");
});

titulo.addEventListener("mouseout", () => {
  titulo.classList.remove("fonte-maior");
});
