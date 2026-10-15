export default class Modal {
  #shouldCloseOnOverlay;
  #overlayClickHandler;

  constructor(modalId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.querySelector(".overlay");
    this.closeButton = this.modal.querySelector(".modal__close");
    this.#shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#overlayClickHandler = this.handleOverlayClick.bind(this);

    this.closeButton.addEventListener("click", () => this.close());
    this.#initClose();
  }

  #initClose() {
    if (this.#shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.#overlayClickHandler);
    }
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("modal-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  handleOverlayClick() {
    this.close();
  }
}
