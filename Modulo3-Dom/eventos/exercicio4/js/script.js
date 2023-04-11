const btnContador = document.querySelectorAll(".btn");
const number = document.querySelector(".number");
let contadorInit = 0;

btnContador.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "+") {
      contadorInit++;
    } else {
      contadorInit--;
      if (contadorInit < 0) {
        contadorInit = 0;
      }
    }
    number.textContent = contadorInit;
  });
});
