const titulo = document.querySelector(".meu-titulo");
const btn = document.querySelector(".meu-botao");

btn.addEventListener("click", handleClick);
btn.addEventListener("dblclick", handleDoubleClick);

function handleClick() {
  titulo.style.color = "red";
}

function handleDoubleClick() {
  titulo.style.color = "blue";
}
