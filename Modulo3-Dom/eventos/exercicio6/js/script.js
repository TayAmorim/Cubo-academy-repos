const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const buttons = document.querySelectorAll("button");
const mmensageResult = document.querySelector("h2");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const operador = button.textContent;
    let numero1 = +n1.value;
    let numero2 = +n2.value;
    let result;
    if (numero1 === 0 || numero2 === 0) {
      mmensageResult.textContent = "Preencha os dois números";
    } else {
      if (operador === "+") {
        result = numero1 + numero2;
      }
      if (operador === "-") {
        result = numero1 - numero2;
      }
      if (operador === "/") {
        result = numero1 / numero2;
      }
      if (operador === "*") {
        result = numero1 * numero2;
      }
      n1.value = 0;
      n2.value = 0;
      mmensageResult.textContent = `Resultado:${result}`;
    }
  });
});
