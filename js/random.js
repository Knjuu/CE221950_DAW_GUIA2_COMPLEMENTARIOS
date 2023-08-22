document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const resultElement = document.getElementById("result");
  
    generateButton.addEventListener("click", function() {
      const randomNumber = Math.random();
      resultElement.textContent = `El número aleatorio generado es: ${randomNumber.toFixed(4)}`;
    });
  });
  