const listColor = document.querySelectorAll(".box");
const btnDraw = document.querySelector("button");
const result = document.querySelector(".h2-result");

const listRandomColor = ["red", "blue", "purple", "orange"];
const colorRandom = listRandomColor[Math.floor(Math.random() * 4)];

listColor.forEach((color) => {
  color.addEventListener("click", colorSelected);
});

btnDraw.addEventListener("click", colorDraw);

function colorSelected(event) {
  const color = event.target;
  listColor.forEach((colorComparison) => {
    if (colorComparison === color) {
      colorComparison.classList.toggle("selected");
    } else colorComparison.classList.remove("selected");
  });
}

function colorDraw() {
  let counter = 0;
  listColor.forEach((color) => {
    if (color.classList.contains("selected")) {
      if (color.classList[1] === colorRandom) {
        result.innerText = "Parabéns você acertou!";
      } else result.innerText = "Tente novamente!";
    } else {
      counter++;
    }
    if (counter === 4) {
      result.innerText = "Selecione uma cor para sortear";
    }
  });
}
