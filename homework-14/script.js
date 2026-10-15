import Modal from "./Modal.js";

const registrationModal = new Modal("registration_modal");

const openButton = document.getElementById("open_modal");

openButton.addEventListener("click", () => {
  registrationModal.open();
});
