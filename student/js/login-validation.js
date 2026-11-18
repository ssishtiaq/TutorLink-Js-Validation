// TutorLink Student Login - JavaScript form validation
// Validation messages are displayed with innerHTML.

function showError(elementId, message) {
  document.getElementById(elementId).innerHTML = message;
}

function clearMessages(form) {
  form.querySelectorAll(".error").forEach(function (item) {
    item.innerHTML = "";
  });
}

function showFormMessage(elementId, message, isSuccess) {
  var messageBox = document.getElementById(elementId);
  messageBox.innerHTML = message;
  messageBox.className = isSuccess ? "message success" : "message error-message";
}

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailPattern.test(email);
}

var loginForm = document.getElementById("studentLoginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearMessages(loginForm);

    var category = document.getElementById("login-category").value;
    var email = document.getElementById("login-email").value.trim();
    var password = document.getElementById("login-password").value;
    var valid = true;

    if (category === "") {
      showError("categoryError", "Please select your user category.");
      valid = false;
    }

    if (email === "") {
      showError("loginEmailError", "Email field cannot be empty.");
      valid = false;
    } else if (!isValidEmail(email)) {
      showError("loginEmailError", "Enter a valid email address.");
      valid = false;
    }

    if (password.trim() === "") {
      showError("loginPasswordError", "Password field cannot be empty.");
      valid = false;
    } else if (password.length < 6) {
      showError("loginPasswordError", "Password must contain at least 6 characters.");
      valid = false;
    }

    if (valid) {
      showFormMessage("loginMessage", "Login validation successful!", true);
    } else {
      showFormMessage("loginMessage", "Please correct the errors above.", false);
    }
  });

  loginForm.addEventListener("change", function () {
    clearMessages(loginForm);
    document.getElementById("loginMessage").innerHTML = "";
  });
}
