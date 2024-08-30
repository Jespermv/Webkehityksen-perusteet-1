function determineGrade() {
  const score = Number(prompt("Enter your score:"));
  const grade =
    score <= 39
      ? 0
      : score <= 51
      ? 1
      : score <= 63
      ? 2
      : score <= 75
      ? 3
      : score <= 87
      ? 4
      : 5;
  document.getElementById("result").textContent = `Your grade is: ${grade}`;
}
