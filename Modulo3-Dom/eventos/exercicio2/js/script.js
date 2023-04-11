const input = document.querySelector(".meu-input");
const paragrafo = document.querySelector(".meu-paragrafo");

input.addEventListener("change", (event) => {
  const texto = event.target.value;
  paragrafo.innerText = texto;
});
