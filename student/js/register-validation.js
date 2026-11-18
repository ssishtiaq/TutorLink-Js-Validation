// TutorLink Student Registration - JavaScript form validation
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

function isValidBangladeshPhone(phone) {
  // 11 digits, starts with 01, and the third digit is 3-9.
  var phonePattern = /^01[3-9]\d{8}$/;
  return phonePattern.test(phone);
}

function isValidStudentName(name) {
  var namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  return namePattern.test(name);
}

var registrationForm = document.getElementById("studentRegistrationForm");
if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearMessages(registrationForm);

    var name = document.getElementById("reg-fullname").value.trim();
    var email = document.getElementById("reg-email").value.trim();
    var phone = document.getElementById("reg-phone").value.trim();
    var institution = document.getElementById("reg-institution").value.trim();
    var academicLevel = document.getElementById("reg-academic-level").value.trim();
    var subjects = document.getElementById("reg-subjects").value.trim();
    var dateOfBirth = document.getElementById("reg-date-of-birth").value;
    var learningMode = document.getElementById("learningMode").value;
    var password = document.getElementById("reg-password").value;
    var confirmPassword = document.getElementById("reg-confirm-password").value;
    var termsAccepted = document.getElementById("reg-terms").checked;
    var valid = true;

    // Rule 1: name is required and contains letters only (with normal name separators).
    if (name === "") {
      showError("regNameError", "Name cannot be empty.");
      valid = false;
    } else if (!isValidStudentName(name)) {
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
      showError("regPhoneError", "Enter a valid 11-digit Bangladesh phone number (e.g. 017XXXXXXXX).");
      valid = false;
    }

    // Student-specific checks for institution, academic level, and subjects.
    if (institution === "") {
      showError("regInstitutionError", "Enter your school, college, or university.");
      valid = false;
    }

    if (academicLevel === "") {
      showError("regLevelError", "Enter your class or academic level.");
      valid = false;
    }

    if (subjects === "") {
      showError("regSubjectsError", "Enter at least one subject you need help with.");
      valid = false;
    }

    if (dateOfBirth === "") {
      showError("regDobError", "Date of birth cannot be empty.");
      valid = false;
    } else {
      var birthDate = new Date(dateOfBirth + "T00:00:00");
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      if (birthDate >= today) {
        showError("regDobError", "Date of birth must be in the past.");
        valid = false;
      }
    }

    if (learningMode === "") {
      showError("regModeError", "Please select a preferred learning mode.");
      valid = false;
    }

    if (!termsAccepted) {
      showError("regTermsError", "Please confirm that the information provided is correct.");
      valid = false;
    }

    if (valid) {
      showFormMessage("registrationMessage", "Registration Successful!", true);
    } else {
      showFormMessage("registrationMessage", "Please correct the errors above.", false);
    }
  });

  registrationForm.addEventListener("change", function () {
    clearMessages(registrationForm);
    document.getElementById("registrationMessage").innerHTML = "";
  });
}
