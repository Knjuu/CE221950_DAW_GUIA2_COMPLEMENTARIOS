document.addEventListener("DOMContentLoaded", function() {
    const removeButton = document.getElementById("removeButton");
    const resultElement = document.getElementById("result");
  
    removeButton.addEventListener("click", function() {
      const originalArray = [1, 2, 3, 4, 5];
      const removedElement = originalArray.pop(); // Elimina el último elemento
  
      resultElement.textContent = `Arreglo resultante: ${originalArray}. Elemento eliminado: ${removedElement}`;
    });
  });
  