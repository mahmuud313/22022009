// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Set your desired numeric password to "112025"
  const correctPassword = "112025";
  let enteredPassword = "";
  const passwordDisplay = document.getElementById("passwordDisplay");

  // These functions are attached to the window so they can be called from inline onclick attributes
  window.appendNumber = function (num) {
    enteredPassword += num;
    passwordDisplay.textContent = enteredPassword;
  };

  window.clearPassword = function () {
    enteredPassword = "";
    passwordDisplay.textContent = "";
  };

  window.checkPassword = function () {
    if (enteredPassword === correctPassword) {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("mediaPage").style.display = "block";
    } else {
      alert("Incorrect password!");
      clearPassword();
    }
  };

  window.goToLetterPage = function () {
    document.getElementById("mediaPage").style.display = "none";
    document.getElementById("letterPage").style.display = "block";
  };
});
