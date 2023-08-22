document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const resultElement = document.getElementById("result");
  
    addButton.addEventListener("click", function() {
      const originalArray = [1, 2, 3];
      originalArray.push(4, 5, 6); // Agrega elementos al final del arreglo
  
      resultElement.textContent = `Arreglo resultante: ${originalArray}`;
    });
  });
  