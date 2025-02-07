// Password Authentication
const password = "112025";
const loginButton = document.getElementById("loginButton");
const passwordInput = document.getElementById("passwordInput");
const loginPage = document.getElementById("loginPage");
const timerPage = document.getElementById("timerPage");
const photoPage = document.getElementById("photoPage");
const messagePage = document.getElementById("messagePage");

loginButton.addEventListener("click", function() {
    if (passwordInput.value === password) {
        loginPage.style.display = "none";
        timerPage.style.display = "flex";  // Show Timer Page
        startTimer();  // Start Timer
    } else {
        alert("Incorrect Password!");
    }
});

// Timer Logic
function startTimer() {
    const targetDate = new Date("July 19, 2024 22:50:00").getTime();
    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("timeIndicator").innerHTML = "The time has arrived!";
        } else {
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            document.getElementById("timeIndicator").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
}

// Navigate to Photo Page after Timer
setTimeout(() => {
    timerPage.style.display = "none";
    photoPage.style.display = "block";
}, 10000); // After 10 seconds, move to photo page (for testing)
