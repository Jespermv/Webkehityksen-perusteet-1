// TODO: Create a TypeScript function named reverseArray that takes an array as a parameter with a generic type parameter T.
function reverseArray<T>(array: T[]): T[] {
    // Inside the function, reverse the elements of the array using a loop or the reverse method.
    return array.reverse();
}

// Test the function with arrays of different types
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const mixedArray: (string | number | boolean)[] = [true, 42, "hello", false];

// Use console log to print the result.
console.log("Reversed Array of Numbers:", reverseArray(numberArray));
console.log("Reversed Array of Strings:", reverseArray(stringArray));
console.log("Reversed Mixed Array:", reverseArray(mixedArray));
