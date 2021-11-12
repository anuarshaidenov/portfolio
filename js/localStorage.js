export const inputName = document.getElementById('name');
export const inputEmail = document.getElementById('email');
export const inputText = document.getElementById('text');

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

export function loadData() {
  if (!localStorage.inputData) {
    return;
  }
  const loadedData = JSON.parse(localStorage.inputData);
  inputName.value = loadedData.name;
  inputEmail.value = loadedData.email;
  inputText.value = loadedData.text;
}

export function saveData() {
  inputData.name = inputName.value;
  inputData.email = inputEmail.value;
  inputData.text = inputText.value;

  const inputDataStr = JSON.stringify(inputData);
  localStorage.inputData = inputDataStr;
}
