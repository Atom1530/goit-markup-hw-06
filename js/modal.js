(() => {
  // Модалка
  const modalRefs = {
    openBtn: document.querySelector('[data-modal-open]'),
    closeBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  modalRefs.openBtn.addEventListener('click', () => {
    modalRefs.modal.classList.toggle('is-open');
  });
  modalRefs.closeBtn.addEventListener('click', () => {
    modalRefs.modal.classList.toggle('is-open');
  });

  // Бургер-меню
  const menuRefs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  menuRefs.openBtn.addEventListener('click', () => {
    menuRefs.menu.classList.toggle('is-open');
  });
  menuRefs.closeBtn.addEventListener('click', () => {
    menuRefs.menu.classList.toggle('is-open');
  });
})();
