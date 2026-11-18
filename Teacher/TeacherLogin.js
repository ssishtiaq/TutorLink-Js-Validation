// Get form elements
var form = document.querySelector(".demo-form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.querySelector(".form-message");
var submitButton = document.querySelector(".submit-button");

// Email validation function
function validateEmail() {
    var emailValue = email.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue == "") {
        message.innerHTML = "Email address cannot be empty";
        return false;
    }
    else if (!emailPattern.test(emailValue)) {
        message.innerHTML = "Enter a valid email address";
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
    else if (passwordValue.length < 6) {
        message.innerHTML = "Password must contain at least 6 characters";
        return false;
    }

    return true;
}

// Complete login validation function
function validateLogin() {
    var emailValid = validateEmail();

    if (emailValid == false) {
        return false;
    }

    var passwordValid = validatePassword();

    if (passwordValid == false) {
        return false;
    }

    return true;
}

// Change event
email.addEventListener("change", function () {
    validateEmail();
});

password.addEventListener("change", function () {
    validatePassword();
});

// Click event
submitButton.addEventListener("click", function () {
    validateLogin();
});

// Submit event
form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (validateLogin() == false) {
        return;
    }
    else {
        message.innerHTML = "Login Successful!";
        form.reset();
    }

});