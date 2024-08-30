function sortArray(numbers, order) {
  if (order === "asc") {
    return numbers.slice().sort((a, b) => a - b);
  } else if (order === "desc") {
    return numbers.slice().sort((a, b) => b - a);
  } else {
    throw new Error("Invalid order parameter. Use 'asc' or 'desc'.");
  }
}

const numbers = [5, 2, 8, 1, 9];
console.log("Sorted in Ascending Order:", sortArray(numbers, "asc"));
console.log("Sorted in Descending Order:", sortArray(numbers, "desc"));
