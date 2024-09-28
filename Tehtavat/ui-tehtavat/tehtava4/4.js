// JavaScript for handling login dialog
const openLoginDialog = document.getElementById("openLoginDialog");
const closeLoginDialog = document.getElementById("closeLoginDialog");
const loginDialog = document.getElementById("loginDialog");

openLoginDialog.addEventListener("click", () => {
  loginDialog.showModal();
});

closeLoginDialog.addEventListener("click", () => {
  loginDialog.close();
});

// Form validation messages
const form = loginDialog.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

nameInput.addEventListener("input", () => {
  const errorMessage = document.getElementById("name-error");
  errorMessage.style.display = nameInput.validity.tooShort ? "block" : "none";
});

emailInput.addEventListener("input", () => {
  const errorMessage = document.getElementById("email-error");
  errorMessage.style.display = emailInput.validity.patternMismatch
    ? "block"
    : "none";
});

passwordInput.addEventListener("input", () => {
  const errorMessage = document.getElementById("password-error");
  errorMessage.style.display = passwordInput.validity.patternMismatch
    ? "block"
    : "none";
});
