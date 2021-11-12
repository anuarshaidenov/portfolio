const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputText = document.getElementById('text');

const inputData = {
  name: '',
  email: '',
  text: '',
};

export function emptyLocalStorage() {
  inputData.name = '';
  inputData.email = '';
  inputData.text = '';
  const inputDataStr = JSON.stringify(inputData);
  localStorage.inputData = inputDataStr;
}

function loadData() {
  if (!localStorage.inputData) {
    return;
  }
  const loadedData = JSON.parse(localStorage.inputData);
  inputName.value = loadedData.name;
  inputEmail.value = loadedData.email;
  inputText.value = loadedData.text;
}

function saveData() {
  inputData.name = inputName.value;
  inputData.email = inputEmail.value;
  inputData.text = inputText.value;

  const inputDataStr = JSON.stringify(inputData);
  localStorage.inputData = inputDataStr;
}

window.addEventListener('load', loadData);

inputName.addEventListener('input', saveData);
inputEmail.addEventListener('input', saveData);
inputText.addEventListener('input', saveData);
