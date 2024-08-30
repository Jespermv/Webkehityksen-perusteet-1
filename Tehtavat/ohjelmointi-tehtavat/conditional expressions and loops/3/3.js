function determineTriangle() {
  const [a, b, c] = [
    prompt("Enter side a:"),
    prompt("Enter side b:"),
    prompt("Enter side c:"),
  ].map(Number);
  const result =
    a === b && b === c
      ? "Equilateral Triangle"
      : a === b || b === c || a === c
      ? "Isosceles Triangle"
      : "Scalene Triangle";
  document.getElementById("result").textContent = result;
}
