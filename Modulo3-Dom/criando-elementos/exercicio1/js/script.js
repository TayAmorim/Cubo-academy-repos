const novaTarefa = document.querySelector(".nova-tarefa");
const btnSucess = document.querySelector(".btn-success");
const main = document.querySelector(".conteudo-principal");
const containerNewTask = document.querySelector(".container-new-task");
const img = document.querySelector("img");

btnSucess.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
  const tarefa = novaTarefa.value;
  criarElemento(tarefa);
}

function criarElemento(tarefa) {
  const divContainer = document.createElement("div");
  const divTask = document.createElement("div");
  const span = document.createElement("span");
  const img = document.createElement("img");
  novaTarefa.style.border = "1px solid black";
  if (tarefa !== "") {
    main.appendChild(divContainer);
    divContainer.appendChild(divTask);
    divTask.appendChild(span);
    divContainer.classList.add("container-tasks");
    divTask.classList.add("task");
    span.innerText = `${tarefa}`;
    divTask.appendChild(img);
    img.src = "assets/remove.svg";
    img.addEventListener("click", () => {
      main.removeChild(divContainer);
    });
  } else {
    novaTarefa.style.border = "1px solid red";
  }
}
