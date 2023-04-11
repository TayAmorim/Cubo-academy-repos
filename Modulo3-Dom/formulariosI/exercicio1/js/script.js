const password = document.querySelector("#password");
const passwordComfirmation = document.querySelector("#password-confirmation");
const btn = document.querySelector("button");
const mensage = document.querySelector(".mensage");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const senha = password.value;
  const senhaComfirmation = passwordComfirmation.value;
  if (senha === senhaComfirmation) {
    mensage.innerText = "Senha correta";
  } else mensage.innerText = "Senha incorreta";
});
