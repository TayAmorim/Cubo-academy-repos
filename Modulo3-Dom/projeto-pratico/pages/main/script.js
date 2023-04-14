const logout = document.querySelector(".icon-logout");
const form = document.querySelector(".form-modal-contact");
const inputs = document.querySelectorAll(".form-modal-contact input");
const modalContact = document.querySelector(".modal-contact");
const btnOpenModalContact = document.querySelector(".btn-contact");
const btnAdicionarNewContact = document.querySelector(".btn-add");
const closedModalContact = document.querySelector(".closed-modal-contact");
const btnCancel = document.querySelector(".btn-cancel");

btnOpenModalContact.addEventListener("click", openModalNewContact);
closedModalContact.addEventListener("click", closedModal);
btnCancel.addEventListener("click", closedModal);

function openModalNewContact() {
  modalContact.classList.remove("disabled");
}

function closedModal() {
  modalContact.classList.add("disabled");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  closedModal();
});

logout.addEventListener("click", () => {
  location = "../../index.html";
});
