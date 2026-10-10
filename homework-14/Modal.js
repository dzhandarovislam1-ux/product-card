export default class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.querySelector(".overlay");
    this.closeButton = this.modal.querySelector(".modal__close");
    this.handleOverlayClick = this.handleOverlayClick.bind(this);

    this.closeButton.addEventListener("click", () => this.close());
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("modal-showed");
    this.overlay.addEventListener("click", this.handleOverlayClick);
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("modal-showed");
    this.overlay.removeEventListener("click", this.handleOverlayClick);
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  handleOverlayClick() {
    this.close();
  }
}
