const form = document.querySelector(".form-login");
const inputs = document.querySelectorAll(".form-login input");
const btnNewRegister = document.querySelector(".new-register-link");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].style.border = "1px solid red";
      inputs[i].placeholder = "Preencha esse campo";
      return;
    } else {
      inputs[i].style.borderColor = "none";
    }
  }
  location = "./pages/main/index.html";
});

btnNewRegister.addEventListener("click", () => {
  location = "./pages/sing-up/index.html";
});
