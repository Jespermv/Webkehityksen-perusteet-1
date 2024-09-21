// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number): number {
    // TODO: Use a type guard to check the actual type of 'value'
    if (typeof value === 'string') {
        // if type is string, return the length of the string
        return value.length;
    } else {
        // if type is number, return the square of the number
        return value * value;
    }
}

// Prompt the user to enter a value as either a string or a number
const userInputt = prompt("Enter a value (either a string or a number):");

// TODO: If userInput is numeric, convert it to number else keep it as string
const parsedValue: string | number = !isNaN(Number(userInputt)) ? Number(userInputt) : userInputt!;

// Call the lengthOrSquare function
const resultt = lengthOrSquare(parsedValue);
console.log(typeof resultt);
console.log(resultt);