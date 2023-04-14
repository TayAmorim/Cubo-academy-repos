const logout = document.querySelector(".icon-logout");

const form = document.querySelector(".form-modal-contact");
const inputs = document.querySelectorAll(".form-modal-contact input");
const modalContact = document.querySelector(".modal-contact");
const btnOpenModalContact = document.querySelector(".btn-contact");
const btnAdicionarNewContact = document.querySelector(".btn-add");
const closedModalContact = document.querySelector(".closed-modal-contact");
const btnCancel = document.querySelector(".btn-cancel-contact");

const btnOpenModalExclusion = document.querySelectorAll(".delet-contact");
const modalExclusion = document.querySelector(".modal-exclusion");
const btnExclusionModal = document.querySelector(".btn-exclusion-modal");
const btnCancelModalExclusion = document.querySelector(".btn-cancel-exclusion");
const btnclosedModalExclusion = document.querySelector(
  ".closed-modal-exclusion"
);

btnOpenModalExclusion.forEach((btn) => {
  btn.addEventListener("click", openModalExclusion);
});

btnOpenModalContact.addEventListener("click", openModalNewContact);

[btnExclusionModal, btnCancelModalExclusion, btnclosedModalExclusion].forEach(
  (elemento) => {
    elemento.addEventListener("click", closedModalExclusion);
  }
);

[closedModalContact, btnCancel].forEach((elemento) => {
  elemento.addEventListener("click", closeModalNewContact);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  closeModalNewContact();
});

logout.addEventListener("click", () => {
  location = "../../index.html";
});

function openModalNewContact() {
  modalContact.classList.remove("disabled");
}

function closeModalNewContact() {
  modalContact.classList.add("disabled");
}

function openModalExclusion() {
  modalExclusion.classList.remove("disabled");
}

function closedModalExclusion() {
  modalExclusion.classList.add("disabled");
}
