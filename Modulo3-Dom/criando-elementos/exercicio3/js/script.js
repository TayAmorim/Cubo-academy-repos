const container = document.querySelector("#meuContainer");
const newText = document.querySelector("#meuInput");
const btnAdd = document.querySelector("#meuBotao");

btnAdd.addEventListener("click", () => {
  const text = newText.value;
  const elemet = document.createElement("p");
  container.appendChild(elemet);
  elemet.innerText = text;
});
