// TutorLink Manager - JavaScript form validation
// All validation messages are displayed with innerHTML as required by Lab Task 03.

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

function isValidBangladeshPhone(phone) {
  // 11 digits, starts with 01, and the third digit is 3-9.
  var phonePattern = /^01[3-9]\d{8}$/;
  return phonePattern.test(phone);
}

function isValidManagerName(name) {
  var namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  return namePattern.test(name);
}

// LOGIN FORM
var loginForm = document.getElementById("managerLoginForm");
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

    if (password === "") {
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
    document.getElementById("loginMessage").innerHTML = "";
  });
}

// REGISTRATION FORM
var registrationForm = document.getElementById("managerRegistrationForm");
if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearMessages(registrationForm);

    var name = document.getElementById("reg-fullname").value.trim();
    var email = document.getElementById("reg-email").value.trim();
    var password = document.getElementById("reg-password").value;
    var confirmPassword = document.getElementById("reg-confirm-password").value;
    var phone = document.getElementById("reg-phone").value.trim();
    var employeeId = document.getElementById("reg-employee-id").value.trim();
    var department = document.getElementById("reg-department").value;
    var valid = true;

    // Rule 1: name is required and contains alphabetic name characters only.
    if (name === "") {
      showError("regNameError", "Name cannot be empty.");
      valid = false;
    } else if (!isValidManagerName(name)) {
      showError("regNameError", "Name should contain only letters.");
      valid = false;
    }

    // Rule 2: email is required and must match a valid email format.
    if (email === "") {
      showError("regEmailError", "Email field cannot be empty.");
      valid = false;
    } else if (!isValidEmail(email)) {
      showError("regEmailError", "Enter a valid email address.");
      valid = false;
    }

    // Rule 3: password must be at least 6 characters and contain a number.
    if (password === "") {
      showError("regPasswordError", "Password cannot be empty.");
      valid = false;
    } else if (password.length < 6 || !/\d/.test(password)) {
      showError("regPasswordError", "Password is too weak. Use at least 6 characters and one number.");
      valid = false;
    }

    // Rule 4: confirm password must match the password.
    if (confirmPassword === "") {
      showError("regConfirmError", "Please confirm your password.");
      valid = false;
    } else if (password !== confirmPassword) {
      showError("regConfirmError", "Passwords do not match.");
      valid = false;
    }

    // Rule 5: phone must contain exactly 11 numeric digits in Bangladesh mobile format.
    if (phone === "") {
      showError("regPhoneError", "Phone number cannot be empty.");
      valid = false;
    } else if (!isValidBangladeshPhone(phone)) {
      showError("regPhoneError", "Enter a valid 11-digit phone number (e.g. 017XXXXXXXX).");
      valid = false;
    }

    // Additional manager-specific checks for employee ID and department.
    if (!/^TL-M\d{3,6}$/.test(employeeId)) {
      showError("regEmployeeError", "Employee ID must follow the format TL-M001.");
      valid = false;
    }

    if (department === "") {
      showError("regDepartmentError", "Please select a department.");
      valid = false;
    }

    if (valid) {
      showFormMessage("registrationMessage", "Registration Successful!", true);
      registrationForm.reset();
    } else {
      showFormMessage("registrationMessage", "Please correct the errors above.", false);
    }
  });

  registrationForm.addEventListener("reset", function () {
    window.setTimeout(function () {
      clearMessages(registrationForm);
      document.getElementById("registrationMessage").innerHTML = "";
    }, 0);
  });
}

// MANAGER PROFILE FORM
var profileForm = document.getElementById("managerProfileForm");
if (profileForm) {
  profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearMessages(profileForm);

    var name = document.getElementById("profile-fullname").value.trim();
    var email = document.getElementById("profile-email").value.trim();
    var phone = document.getElementById("profile-phone").value.trim();
    var role = document.getElementById("profile-role").value;
    var department = document.getElementById("profile-department").value;
    var valid = true;

    if (name === "" || !isValidManagerName(name)) {
      showError("profileNameError", "Enter a name using letters only.");
      valid = false;
    }

    if (email === "" || !isValidEmail(email)) {
      showError("profileEmailError", "Enter a valid email address.");
      valid = false;
    }

    if (phone !== "" && !isValidBangladeshPhone(phone)) {
      showError("profilePhoneError", "Enter a valid 11-digit phone number.");
      valid = false;
    }

    if (role === "") {
      showError("profileRoleError", "Please select a management role.");
      valid = false;
    }

    if (department === "") {
      showError("profileDepartmentError", "Please select a department.");
      valid = false;
    }

    if (valid) {
      showFormMessage("profileMessage", "Profile validation successful! (Demo only - not saved.)", true);
    } else {
      showFormMessage("profileMessage", "Please correct the errors above.", false);
    }
  });
}
