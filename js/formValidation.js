import { emptyLocalStorage } from './localStorage.js';

const email = document.querySelector('#email');
const errorMsg = document.querySelector('#error-msg');
export const form = document.querySelector('#form');

function isEmailLowerCase(emailValue) {
  return emailValue === emailValue.toLowerCase();
}

export function validateForm() {
  if (isEmailLowerCase(email.value)) {
    errorMsg.classList.add('invisible');
    errorMsg.classList.remove('shake');

    // Clear the local storage before submission
    emptyLocalStorage();

    form.submit();
  } else {
    errorMsg.textContent = 'Email must be typed in lowercase.';
    errorMsg.classList.remove('invisible');
    errorMsg.classList.add('shake');
  }
}
