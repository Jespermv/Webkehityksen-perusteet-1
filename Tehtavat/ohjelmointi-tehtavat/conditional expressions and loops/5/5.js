function calculateSum() {
  let n = Number(prompt("Enter a positive integer:"));
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  document.getElementById("result").textContent = `Sum: ${sum}`;
}
