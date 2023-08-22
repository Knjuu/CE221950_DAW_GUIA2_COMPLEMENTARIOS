document.addEventListener("DOMContentLoaded", function() {
    const reverseButton = document.getElementById("reverseButton");
    const resultElement = document.getElementById("result");
  
    reverseButton.addEventListener("click", function() {
      const originalArray = [1, 2, 3, 4, 5];
      const reversedArray = originalArray.slice().reverse(); // Crea una copia del arreglo y luego invierte el orden
  
      resultElement.textContent = `Arreglo resultante: ${reversedArray}`;
    });
  });
  