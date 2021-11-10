const navLinks = document.querySelectorAll('.nav-link');

function scrollToSection(el) {
  el.scrollIntoView({ behavior: 'smooth' });
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.href
      .split('')
      .splice(e.target.href.indexOf('#'))
      .join('');
    const target = document.querySelector(id);
    scrollToSection(target);
  });
});
