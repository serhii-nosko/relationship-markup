const menuAccordion = document.getElementById('menu-accordion');

menuAccordion.addEventListener('click', () => {
  const menu = document.querySelector('.header__nav-list');

  menu.classList.toggle('header__nav-list_open');
}) 