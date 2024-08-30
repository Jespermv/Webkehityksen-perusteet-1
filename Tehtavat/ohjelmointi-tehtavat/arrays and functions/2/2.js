document.addEventListener("DOMContentLoaded", () => {
  const numbers = [];

  for (let i = 1; i <= 5; i++) {
    const num = Number(prompt(`Enter Number ${i}:`));
    numbers.push(num);
  }

  console.log(`Numbers: ${JSON.stringify(numbers)}`);

  const searchNum = Number(prompt("Enter a Number to Search:"));
  console.log(
    `Number ${searchNum} ${
      numbers.includes(searchNum) ? "is found" : "is not found"
    } in the array.`
  );

  numbers.pop();
  console.log(`Updated Numbers: ${JSON.stringify(numbers)}`);

  numbers.sort((a, b) => a - b);
  console.log(`Sorted Numbers: ${JSON.stringify(numbers)}`);
});
