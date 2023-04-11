const avatar = document.querySelector("img");
const imgs = [2, 3, 4, 5, 6, 7, 8];
const body = document.querySelector("body");

const atualwidth = body.offsetWidth / 9;
let incrementalWidth = 0;
const teste = avatar.offsetWidth;

for (let i = 0; i < imgs.length; i++) {
  setTimeout(() => {
    avatar.src = `assets/${imgs[i]}.png`;
    avatar.style.left = `${incrementalWidth}px`;
    incrementalWidth += atualwidth;
  }, 600 * i);
}
