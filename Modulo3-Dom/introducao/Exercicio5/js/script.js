const text = document.querySelector(".text");
const btnDecrement = document.querySelector(".btn-decrement-font");
const btnIncrement = document.querySelector(".btn-increment-font");
const currentFont = document.querySelector(".current-font-size");

const btnUnderline = document.querySelector(".btn-underline");
const btnItalic = document.querySelector(".btn-italic");
const btnBold = document.querySelector(".btn-bold");
let textFont = currentFont.textContent;

const btnRed = document.querySelector(".btn-red");
const btnBlue = document.querySelector(".btn-blue");
const btnPurple = document.querySelector(".btn-purple");
const btnBlack = document.querySelector(".btn-black");

btnUnderline.addEventListener("click", () => {
  text.style.textDecoration = "underline";
});

btnItalic.addEventListener("click", () => {
  text.style.fontStyle = "italic";
});

btnBold.addEventListener("click", () => {
  text.style.fontWeight = "bold";
});

btnDecrement.addEventListener("click", () => {
  if (textFont > 12) {
    textFont -= 2;
    currentFont.textContent = textFont;
    text.style.fontSize = `${textFont}px`;
  }
});

btnIncrement.addEventListener("click", () => {
  textFont = +textFont + 2;
  currentFont.textContent = textFont;
  text.style.fontSize = `${textFont}px`;
});

btnRed.addEventListener("click", () => {
  text.style.color = "red";
});

btnBlue.addEventListener("click", () => {
  text.style.color = "blue";
});

btnPurple.addEventListener("click", () => {
  text.style.color = "purple";
});

btnBlack.addEventListener("click", () => {
  text.style.color = "black";
});
