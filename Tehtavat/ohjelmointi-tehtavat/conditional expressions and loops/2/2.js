function calculateDistance() {
  const [x1, y1] = prompt("Enter the first point (x1, y1):")
    .split(",")
    .map(Number);
  const [x2, y2] = prompt("Enter the second point (x2, y2):")
    .split(",")
    .map(Number);

  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  document.getElementById("result").textContent = `Distance: ${distance.toFixed(
    0
  )}`;
}
