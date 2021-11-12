import { navLinks, scrollToSection } from './scroll.js';
import { form, validateForm } from './formValidation.js';
import {
  backdrop, modalCloseBtn, closeModal, displayCards,
} from './modal.js';
import {
  loadData,
  saveData,
  inputName,
  inputEmail,
  inputText,
} from './localStorage.js';
import {
  btnHamburger,
  btnClose,
  links,
  openMenu,
  closeMenu,
} from './mobileMenu.js';

// Mobile menu functionality
btnHamburger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Smooth scroll functionality
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection(e.target.href);
  });
});

// Form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

inputName.addEventListener('input', saveData);
inputEmail.addEventListener('input', saveData);
inputText.addEventListener('input', saveData);

// Close modal functionality
modalCloseBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', (e) => {
  if (e.target.id === 'backdrop') closeModal();
});

// Display the projects
displayCards();

// Save contact form input data in the local storage
loadData();
