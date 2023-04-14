const form = document.querySelector(".form-login");
const inputs = document.querySelectorAll(".form-login input");
const btnNewRegister = document.querySelector(".new-register-link");
const btnClear = document.querySelector(".btn-cancel");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].style.border = "1px solid red";
      return;
    }
    inputs[i].style.border = "1px solid transparent";
  }
  location = "../main/index.html";
});

btnClear.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" || inputs[i].value === " ") {
      inputs[i].style.border = "none";
    }
  }
});

btnNewRegister.addEventListener("click", () => {
  location = "../../index.html";
});
