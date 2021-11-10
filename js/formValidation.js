const email = document.querySelector('#email');
const form = document.querySelector('#form');
const errorMsg = document.querySelector('#error-msg');

function isEmailLowerCase(emailValue) {
  return emailValue === emailValue.toLowerCase() ? true : false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isEmailLowerCase(email.value)) {
    errorMsg.classList.add('invisible');
    errorMsg.classList.remove('shake');
    form.submit();
  } else {
    errorMsg.textContent = 'Email must be typed in lowercase.';
    errorMsg.classList.remove('invisible');
    errorMsg.classList.add('shake');
  }
});
