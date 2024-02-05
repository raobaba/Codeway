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

function calculateSquareRoot() {
    currentDisplay = Math.sqrt(eval(currentDisplay));
    document.querySelector('#display').value = currentDisplay;
  }
  
  function calculatePercentage() {
    currentDisplay = eval(currentDisplay) / 100;
    document.querySelector('#display').value = currentDisplay;
  }
  
  function clearLastEntry() {
    // Remove the last character from the current display
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
  }
  
