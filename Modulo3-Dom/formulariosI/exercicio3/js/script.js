const estados = document.querySelectorAll("#estados");
const alert = document.querySelector(".alert");

estados.forEach((estado) => {
  estado.addEventListener("change", (event) => {
    const selectEstado = event.target.value;
    if (selectEstado === "MG") {
      alert.innerText = "Uai sô que calor é esse que tá pegando";
    }
    if (selectEstado === "SP") {
      alert.innerText = "Cê loco que calor";
    }
    if (selectEstado === "SA") {
      alert.innerText = "Tá um sol pra cada um ";
    }
  });
});
