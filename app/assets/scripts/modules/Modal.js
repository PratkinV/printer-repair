import $ from 'jquery'; 

class Modal {
  constructor(modalType) {    
    this.openModalButton = $(".open-modal-" + modalType);    
    this.modal = $(".modal-" + modalType);    
    this.closeModalButton = $(".modal__close");
    this.events();    
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal(modalType) {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
    return false;
  }
}

export default Modal;
