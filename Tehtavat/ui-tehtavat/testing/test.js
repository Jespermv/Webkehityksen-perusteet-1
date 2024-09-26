document.getElementById("open-dialog").addEventListener("click", () => {
  document.getElementById("login-dialog").showModal();
});

document.getElementById("close-dialog").addEventListener("click", () => {
  document.getElementById("login-dialog").close();
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
