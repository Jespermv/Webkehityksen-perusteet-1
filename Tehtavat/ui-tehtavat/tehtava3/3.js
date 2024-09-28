document.getElementById("openLoginDialog").addEventListener("click", () => {
  document.getElementById("loginDialog").showModal();
});

document.getElementById("closeLoginDialog").addEventListener("click", () => {
  document.getElementById("loginDialog").close();
});

// Form validation
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

nameField.addEventListener("input", () => {
  const errorMessage = document.getElementById("name-error");
  if (nameField.validity.tooShort) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

emailField.addEventListener("input", () => {
  const errorMessage = document.getElementById("email-error");
  if (!emailField.validity.valid) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

passwordField.addEventListener("input", () => {
  const errorMessage = document.getElementById("password-error");
  if (!passwordField.validity.valid) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

// Handle form submission
document
  .querySelector("form[method='dialog']")
  .addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    // Here you can add your login logic (e.g., validation or AJAX call)
    alert("Login submitted!"); // For demonstration
    document.getElementById("loginDialog").close(); // Close dialog after submission
  });
