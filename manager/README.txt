TutorLink Manager - JavaScript Validation (Lab Task 03)

FILES
- manager-login.html       Manager login form
- manager-register.html   Manager registration form
- manager-profile.html    Manager profile form
- js/manager-validation.js JavaScript validation for all three forms
- css/login.css            Login page styling
- css/registration.css     Registration page styling
- css/dashboard.css        Profile page styling

HOW TO RUN
1. Extract the ZIP file.
2. Open the extracted TutorLink_Manager_JS_Validation folder in VS Code.
3. Open manager-login.html in a browser (or use Live Server).
4. Navigate between Login, Registration and Profile pages.

VALIDATION INCLUDED
- Login: category required, email required/format, password required/minimum 6 characters.
- Registration: name letters only, valid email, password minimum 6 characters plus a number,
  confirm-password match, 11-digit Bangladesh mobile number, manager employee ID format,
  and department selection.
- Profile: name, email, optional phone format, role and department validation.
- All validation messages are inserted using JavaScript innerHTML.

NOTE
This is client-side validation for a lab prototype. Successful validation does not authenticate
a manager or save registration/profile data. PHP/server-side validation and database storage
are still required for a real application.
