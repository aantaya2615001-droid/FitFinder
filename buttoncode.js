document.addEventListener("DOMContentLoaded", function () {

  // Reusable function to handle adding items
  function setupCategory(inputId, buttonId, listId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
    const list = document.getElementById(listId);

    button.addEventListener("click", function () {
      const itemText = input.value.trim();

      // Prevent empty entries
      if (itemText === "") {
        alert("Please enter an item!");
        return;
      }

      // Create new list item
      const li = document.createElement("li");
      li.textContent = itemText;

      // Optional: click to remove item
      li.addEventListener("click", function () {
        li.remove();
      });

      // Add item to list
      list.appendChild(li);

      // Clear input
      input.value = "";
    });

    // Allow pressing Enter to add item
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        button.click();
      }
    });
  }

  // Setup each category
  setupCategory("pants-item-input", "add-to-pants-button", "pants-list");
  setupCategory("shirts-item-input", "add-to-shirts-button", "shirts-list");
  setupCategory("shoes-item-input", "add-to-shoes-button", "shoes-list");

});
// Function to get random item from a list
function getRandomItem(listElement) {
  const items = listElement.querySelectorAll("li");

  if (items.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex].textContent;
}

// Outfit generator
const generateButton = document.getElementById("generate-outfit-button");
const outfitResult = document.getElementById("outfit-result");

generateButton.addEventListener("click", function () {
  const pantsList = document.getElementById("pants-list");
  const shirtsList = document.getElementById("shirts-list");
  const shoesList = document.getElementById("shoes-list");

  const randomPants = getRandomItem(pantsList);
  const randomShirt = getRandomItem(shirtsList);
  const randomShoes = getRandomItem(shoesList);

  // Check if any category is empty
  if (!randomPants || !randomShirt || !randomShoes) {
    outfitResult.textContent = "Add at least one item to each category!";
    return;
  }

  // Display outfit
  outfitResult.innerHTML = `
    👕 Shirt: ${randomShirt} <br>
    👖 Pants: ${randomPants} <br>
    👟 Shoes: ${randomShoes}
  `;
});