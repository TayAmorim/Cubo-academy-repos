const btnCriandoElement = document.querySelector("#meuBotao");
const containerElement = document.querySelector("#meuContainer");

btnCriandoElement.addEventListener("click", init);

async function init() {
  const responseData = await todos();
  criandoElement(responseData);
}

function criandoElement(responseData) {
  const conteudoElement = responseData.data;
  conteudoElement.forEach((element) => {
    const jsonString = JSON.stringify(element, 2, null);
    const elementP = document.createElement("p");
    containerElement.appendChild(elementP);
    elementP.innerText = jsonString;
  });
}
