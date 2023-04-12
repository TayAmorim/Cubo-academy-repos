const form = document.querySelector("form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputYyearBorn = document.querySelector("#input-year-born");
const selectCity = document.querySelector("select");
const radioMorning = document.getElementsByName("period");
const checkCourses = document.querySelectorAll(".check-courses");
const errorMensage = document.querySelector(".error-message");
const password = document.querySelector("#input-password-recovery");

const currentYear = new Date().getFullYear();
const letrasMaiusculas = /[A-Z]/;
const letrasMinusculas = /[a-z]/;
const numeros = /[0-9]/;
let contMaiuscula = 0;
let contMinuscula = 0;
let contNumero = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectCourses = [];
  const yearValid = inputYyearBorn.value.split("");
  const agefilter = currentYear - inputYyearBorn.value;
  const cityValid = selectCity.options[selectCity.selectedIndex].value;
  errorMensage.innerText = "";

  if (yearValid.length === 4) {
    if (agefilter < 18) {
      errorMensage.innerText =
        "Inscrição permitida apenas para maiores de 18 anos";
    }
  } else errorMensage.innerText = "Formato de ano de nascimento incorreta";

  if (cityValid === "empty") {
    errorMensage.innerText = "Necessário selicionar a cidade da prova";
  }

  checkCourses.forEach((course) => {
    if (course.checked) {
      selectCourses.push(course.name);
    }
  });
  if (selectCourses.length === 0) {
    errorMensage.innerText = "Necessário selicionar pelo menos um curso";
  }

  for (let i = 0; i < password.value.length; i++) {
    if (letrasMaiusculas.test(password.value[i])) {
      contMaiuscula++;
    } else if (letrasMaiusculas.test(password.value[i])) {
      contMinuscula++;
    } else if (numeros.test(password.value[i])) {
      contNumero++;
    }
  }
  if (contMaiuscula === 0 || contMinuscula === 0 || contNumero === 0) {
    errorMensage.innerText =
      "Sua senha precisa preencher aos critérios (mínimo 8 caracters, pelo menos uma letra maiúscula, minúscula e um número)";
  }
});
