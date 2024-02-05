let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

function clearDisplay() {
  currentDisplay = '';
  document.querySelector('#display').value = currentDisplay;
}

function addToDisplay(value) {
  currentDisplay = currentDisplay + value;
  document.querySelector('#display').value = currentDisplay;
}

function calculate() {
  currentDisplay = eval(currentDisplay);
  document.querySelector('#display').value = currentDisplay;
}
