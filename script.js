document.addEventListener("DOMContentLoaded", function () {
  // Set the correct numeric password to "112025"
  const correctPassword = "112025";
  let enteredPassword = "";
  const passwordDisplay = document.getElementById("passwordDisplay");

  // Functions accessible from inline onclick attributes
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
      // Hide login page and show timer page
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("timerPage").style.display = "flex";
      startCountdown();
    } else {
      alert("Incorrect password!");
      clearPassword();
    }
  };

  window.goToMediaPage = function () {
    document.getElementById("timerPage").style.display = "none";
    document.getElementById("mediaPage").style.display = "block";
  };

  window.goToLetterPage = function () {
    document.getElementById("mediaPage").style.display = "none";
    document.getElementById("letterPage").style.display = "block";
  };

  // Countdown timer function
  window.startCountdown = function () {
    // Set the target date and time (July 19, 2024 22:50:00)
    var countDownDate = new Date("July 19, 2024 22:50:00").getTime();

    var countdownInterval = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  };
});
