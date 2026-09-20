export default class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);

    this.closeButton = this.modal.querySelector(".modal__close");

    this.closeButton.addEventListener("click", () => this.close());
  }

  open() {
    this.modal.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }
}
