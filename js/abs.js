document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const inputNumber = document.getElementById("inputNumber");
    const resultElement = document.getElementById("result");
  
    calculateButton.addEventListener("click", function() {
      const inputValue = parseFloat(inputNumber.value);
  
      if (!isNaN(inputValue)) {
        const absoluteValue = Math.abs(inputValue);
        resultElement.textContent = `El valor absoluto de ${inputValue} es ${absoluteValue}.`;
      } else {
        resultElement.textContent = "Por favor ingrese un número válido.";
      }
    });
  });
  