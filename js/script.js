const body = document.querySelector('body');
const btnHamburger = document.getElementById('hamburger');
const btnClose = document.getElementById('close');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.mobile-nav__el a');

const openMenu = function () {
  body.style.overflow = 'hidden';
  btnHamburger.classList.add('hidden');
  btnClose.classList.remove('hidden');
  menu.classList.remove('translated');
};

const closeMenu = function () {
  body.style.overflow = 'visible';
  btnClose.classList.add('hidden');
  btnHamburger.classList.remove('hidden');
  menu.classList.add('translated');
};

btnHamburger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
