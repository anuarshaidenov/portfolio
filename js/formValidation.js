const email = document.querySelector('#email');
const form = document.querySelector('#form');
const errorMsg = document.querySelector('#error-msg');

const emailValidationRegex = /^[a-z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function emailCheck(emailValue) {
  return !emailValidationRegex.test(emailValue) ? false : true ;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(emailCheck(email.value) === true){
        errorMsg.style.opacity = 1;
        errorMsg.textContent = 'enter a valid email please !';
    }else {
        errorMsg.style.opacity = 0;
        form.submit();
    }
})