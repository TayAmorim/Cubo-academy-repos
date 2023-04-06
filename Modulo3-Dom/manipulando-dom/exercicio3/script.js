const title = document.querySelector("h2");
const btn = document.querySelector("button");

btn.onclick = () => {
  title.classList.toggle("fonte-maior");
};
