import * as scroll from './scroll.js';
import * as formValidation from './formValidation.js';
import * as modal from './modal.js';
import * as localStorage from './localStorage.js';
import * as mobileMenu from './mobileMenu.js';

// Mobile menu functionality
mobileMenu.btnHamburger.addEventListener('click', mobileMenu.openMenu);
mobileMenu.btnClose.addEventListener('click', mobileMenu.closeMenu);
mobileMenu.links.forEach((link) => {
  link.addEventListener('click', mobileMenu.closeMenu);
});

// Smooth scroll functionality
scroll.navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    scroll.scrollToSection(e.target.href);
  });
});

// Form validation
formValidation.form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation.validateForm();
});

localStorage.inputName.addEventListener('input', localStorage.saveData);
localStorage.inputEmail.addEventListener('input', localStorage.saveData);
localStorage.inputText.addEventListener('input', localStorage.saveData);

// Close modal functionality
modal.modalCloseBtn.addEventListener('click', modal.closeModal);

modal.backdrop.addEventListener('click', (e) => {
  if (e.target.id === 'backdrop') modal.closeModal();
});

// Display the projects
modal.displayCards();

// Save contact form input data in the local storage
localStorage.loadData();
