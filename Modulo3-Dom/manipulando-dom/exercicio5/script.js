const liEmphasis = document.querySelectorAll(" ul li");
const button = document.querySelector("button");

button.onclick = () => {
  liEmphasis.forEach((li) => {
    if (li.classList.contains("li-destaque")) {
      li.classList.add("fonte-vermelha");
    } else li.classList.add("fonte-azul");
  });
};
