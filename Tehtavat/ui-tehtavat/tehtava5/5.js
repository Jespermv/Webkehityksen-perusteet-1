document.addEventListener("DOMContentLoaded", function () {
  const loginDialog = document.getElementById("loginDialog");
  const openLoginDialogBtn = document.getElementById("openLoginDialog");
  const closeLoginDialogBtn = document.getElementById("closeLoginDialog");

  openLoginDialogBtn.addEventListener("click", function () {
    loginDialog.showModal();
  });

  closeLoginDialogBtn.addEventListener("click", function () {
    loginDialog.close();
  });

  // Form validation
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  nameInput.addEventListener("input", function () {
    const nameError = document.getElementById("name-error");
    if (nameInput.validity.tooShort) {
      nameError.style.display = "block";
    } else {
      nameError.style.display = "none";
    }
  });

  emailInput.addEventListener("input", function () {
    const emailError = document.getElementById("email-error");
    if (!emailInput.validity.valid) {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }
  });

  passwordInput.addEventListener("input", function () {
    const passwordError = document.getElementById("password-error");
    if (!passwordInput.validity.valid) {
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }
  });
});
