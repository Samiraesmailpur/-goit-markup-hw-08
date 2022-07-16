(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__button'),
    closeMenuBtn: document.querySelector('.menu__close-button'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('menu-is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
