const form = document.querySelector(".form-login");
const inputs = document.querySelectorAll(".form-login input");
const btnNewRegister = document.querySelector(".new-register-link");
const btnClear = document.querySelector(".btn-cancel");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "" || inputs[i].value === " ") {
      inputs[i].style.border = "1px solid red";
      return;
    }
    inputs[i].style.border = "1px solid transparent";
  }
  registerUser();
});

async function registerUser() {
  const response = await api.post("/usuarios", {
    nome: inputs[0].value,
    email: "daniel.lopes@cubos.academy",
    senha: "123456",
  });
  console.log(response);
}

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
