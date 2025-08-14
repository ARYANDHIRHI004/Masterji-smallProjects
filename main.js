const name = document.getElementById("name");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPasswor = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");
const nameValidation = document.getElementById("nameValidation");
const emailValidation = document.getElementById("emailValidation");
const usernameValidation = document.getElementById("usernameValidation");
const passwordValidation = document.getElementById("passwordValidation");
const confirmPasswordValidation = document.getElementById(
    "confirmPasswordValidation"
);
const welcome = document.getElementById("welcome");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!name.value) {
    nameValidation.innerHTML = "Name is required *";
  } else {
    nameValidation.innerHTML = null;
  }
  if (!email.value) {
    emailValidation.innerHTML = "Email is required *";
  } else {
    emailValidation.innerHTML = null;
  }
  if (!password.value) {
    passwordValidation.innerHTML = "Password is required *";
  } else {
    passwordValidation.innerHTML = null;
    passwordValidation.innerHTML = null;
  }
  if (!username.value) {
    usernameValidation.innerHTML = "Username is required *";
  } else {
    usernameValidation.innerHTML = null;
  }
  if (!confirmPasswor) {
    confirmPasswordValidation.innerHTML = "Confirm Password is required *";
  } else {
    confirmPasswordValidation.innerHTML = null;
  }
  if (confirmPasswor !== password) {
    confirmPasswordValidation.innerHTML = "Confirm Password not matched *";
  } else {
    confirmPasswordValidation.innerHTML = null;
  }

  if(name.value && email.value && password.value && username.value && confirmPasswor.value ){
    welcome.innerHTML = `Welcome ${name.value}`
  }





});
