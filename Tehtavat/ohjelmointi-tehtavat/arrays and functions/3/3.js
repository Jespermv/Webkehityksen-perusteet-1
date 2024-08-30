document.addEventListener("DOMContentLoaded", () => {
  const numbers = [];
  let input;

  while (true) {
    input = prompt("Enter a number (or 'done' to finish):");
    if (input.toLowerCase() === "done") break;
    numbers.push(Number(input));
  }

  let evenNumbers = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }

  document.body.innerHTML = `<h1>Even Numbers: ${
    evenNumbers.length > 0 ? evenNumbers.join(", ") : "None"
  }</h1>`;
});
