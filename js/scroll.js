export const navLinks = document.querySelectorAll('.nav-link');

export function scrollToSection(target) {
  const id = target.split('').splice(target.indexOf('#')).join('');
  const el = document.querySelector(id);
  el.scrollIntoView({ behavior: 'smooth' });
}
