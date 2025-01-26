function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  const result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;
}

function clearResult() {
  document.getElementById('result').value = '';
}