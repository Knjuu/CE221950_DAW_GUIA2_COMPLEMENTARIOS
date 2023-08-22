document.addEventListener("DOMContentLoaded", function() {
    const roundButton = document.getElementById("roundButton");
    const inputNumber = document.getElementById("inputNumber");
    const resultElement = document.getElementById("result");
  
    roundButton.addEventListener("click", function() {
      const inputValue = parseFloat(inputNumber.value);
  
      if (!isNaN(inputValue)) {
        const roundedValue = Math.floor(inputValue);
        resultElement.textContent = `El número ${inputValue} redondeado hacia abajo es: ${roundedValue}`;
      } else {
        resultElement.textContent = "Por favor ingrese un número válido.";
      }
    });
  });
  