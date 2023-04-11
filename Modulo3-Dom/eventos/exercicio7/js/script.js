const avatar = document.querySelector(".character");
const body = document.querySelector("body");
let contadorX = 0;
let contadorY = 0;
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && contadorX < 790) {
    contadorX += 10;
    avatar.src = "assets/left.png";
    avatar.style.right = `${contadorX}px`;
  }
  if (event.key === "ArrowDown" && contadorY < 630) {
    contadorY += 10;
    avatar.src = "assets/front.png";
    avatar.style.top = `${contadorY}px`;
  }
  if (event.key === "ArrowRight" && contadorX > 0) {
    contadorX -= 10;
    avatar.src = "assets/right.png";
    avatar.style.right = `${contadorX}px`;
  }
  if (event.key === "ArrowUp" && contadorY > 0) {
    contadorY -= 10;
    avatar.src = "assets/back.png";
    avatar.style.top = `${contadorY}px`;
  }
});
