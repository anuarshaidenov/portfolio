const btnHamburger = document.getElementById('hamburger');
const btnClose = document.getElementById('close');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.mobile-nav__el a');

const openMenu = function () {
  btnHamburger.classList.add('hidden');
  btnClose.classList.remove('hidden');
  menu.classList.remove('translated');
};

const closeMenu = function () {
  btnClose.classList.add('hidden');
  btnHamburger.classList.remove('hidden');
  menu.classList.add('translated');
};

btnHamburger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
