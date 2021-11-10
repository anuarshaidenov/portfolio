const body = document.querySelector('body');
const btnHamburger = document.getElementById('hamburger');
const btnClose = document.getElementById('close');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.mobile-nav__el a');

function openMenu() {
  body.style.overflow = 'hidden';
  document.querySelector('html').style.overflow = 'hidden';

  btnHamburger.classList.add('hidden');
  btnClose.classList.remove('hidden');
  menu.classList.remove('translated');
}

function closeMenu() {
  body.style.overflow = 'visible';
  document.querySelector('html').style.overflow = 'visible';

  btnClose.classList.add('hidden');
  btnHamburger.classList.remove('hidden');
  menu.classList.add('translated');
}

btnHamburger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
