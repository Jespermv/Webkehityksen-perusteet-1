document.addEventListener("DOMContentLoaded", () => {
  const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

  console.log("Fruits:", fruits);
  console.log("Number of fruits:", fruits.length);
  console.log("Element at index 2:", fruits[2]);
  console.log("Last element:", fruits[fruits.length - 1]);

  const vegetables = [];

  for (let i = 0; i < 3; i++) {
    const vegetable = prompt("Enter a vegetable:");
    vegetables.push(vegetable);
  }

  console.log("Vegetables:", vegetables);
  console.log("Number of vegetables:", vegetables.length);
});
