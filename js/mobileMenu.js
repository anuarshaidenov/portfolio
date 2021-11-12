const body = document.querySelector('body');
const menu = document.getElementById('menu');
export const btnHamburger = document.getElementById('hamburger');
export const btnClose = document.getElementById('close');
export const links = document.querySelectorAll('.mobile-nav__el a');

export function openMenu() {
  body.style.overflow = 'hidden';
  document.querySelector('html').style.overflow = 'hidden';

  btnHamburger.classList.add('hidden');
  btnClose.classList.remove('hidden');
  menu.classList.remove('translated');
}

export function closeMenu() {
  body.style.overflow = 'visible';
  document.querySelector('html').style.overflow = 'visible';

  btnClose.classList.add('hidden');
  btnHamburger.classList.remove('hidden');
  menu.classList.add('translated');
}
