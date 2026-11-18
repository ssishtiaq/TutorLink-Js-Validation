// Get form elements
var form = document.querySelector(".demo-form");
var name = document.getElementById("fullName");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var message = document.querySelector(".form-message");
var submitButton = document.querySelector(".submit-button");

// Name validation function
function validateName() {
    var nameValue = name.value.trim();
    var namePattern = /^[A-Za-z ]+$/;

    if (nameValue == "") {
        message.innerHTML = "Name cannot be empty";
        return false;
    }
    else if (!namePattern.test(nameValue)) {
        message.innerHTML = "Name should contain only letters";
        return false;
    }

    return true;
}

// Email validation function
function validateEmail() {
    var emailValue = email.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue == "") {
        message.innerHTML = "Email cannot be empty";
        return false;
    }
    else if (!emailPattern.test(emailValue)) {
        message.innerHTML = "Enter a valid email address";
        return false;
    }

    return true;
}

// Phone number validation function
function validatePhone() {
    var phoneValue = phone.value;
    var phonePattern = /^[0-9]{11}$/;

    if (phoneValue == "") {
        message.innerHTML = "Phone number cannot be empty";
        return false;
    }
    else if (!phonePattern.test(phoneValue)) {
        message.innerHTML = "Phone number must contain exactly 11 digits";
        return false;
    }

    return true;
}

// Password validation function
function validatePassword() {
    var passwordValue = password.value;

    if (passwordValue == "") {
        message.innerHTML = "Password cannot be empty";
        return false;
    }
    else if (passwordValue.length < 6 || !/[0-9]/.test(passwordValue)) {
        message.innerHTML = "Password must contain at least 6 characters and one number";
        return false;
    }

    return true;
}

// Confirm password validation function
function validateConfirmPassword() {
    var confirmValue = confirmPassword.value;

    if (confirmValue == "") {
        message.innerHTML = "Please confirm your password";
        return false;
    }
    else if (password.value != confirmValue) {
        message.innerHTML = "Passwords do not match";
        return false;
    }

    return true;
}

// Complete registration validation function
function validateRegistration() {

    if (validateName() == false) {
        return false;
    }
    else if (validateEmail() == false) {
        return false;
    }
    else if (validatePhone() == false) {
        return false;
    }
    else if (validatePassword() == false) {
        return false;
    }
    else if (validateConfirmPassword() == false) {
        return false;
    }

    return true;
}

// Change events
name.addEventListener("change", function () {
    validateName();
});

email.addEventListener("change", function () {
    validateEmail();
});

phone.addEventListener("change", function () {
    validatePhone();
});

password.addEventListener("change", function () {
    validatePassword();
});

confirmPassword.addEventListener("change", function () {
    validateConfirmPassword();
});

// Click event
submitButton.addEventListener("click", function () {
    validateRegistration();
});

// Submit event
form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (validateRegistration() == false) {
        return;
    }
    else {
        message.innerHTML = "Registration Successful!";
    }

});