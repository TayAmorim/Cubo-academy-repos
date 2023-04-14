const modalContact = document.querySelector(".modal-contact");
const btnOpenModalContact = document.querySelector(".btn-contact");
const closedModalContact = document.querySelector(".closed-modal-contact");

btnOpenModalContact.addEventListener("click", openModalNewContact);

function openModalNewContact() {
  modalContact.classList.remove("disabled");
}

closedModalContact.addEventListener("click", () => {
  modalContact.classList.add("disabled");
});
