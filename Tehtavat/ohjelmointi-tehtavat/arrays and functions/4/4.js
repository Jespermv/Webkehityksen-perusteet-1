function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

const numbers = [34, 7, 23, 32, 5];
console.log("Original Array:", numbers);
console.log("Sorted Array:", sortArray(numbers));
