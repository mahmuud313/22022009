// Password System
const correctPassword = "1972024";

function addNumber(num) {
    document.getElementById("passwordInput").value += num;
}

function clearPassword() {
    document.getElementById("passwordInput").value = "";
}

function checkPassword() {
    let enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === correctPassword) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        alert("Incorrect Password!");
        clearPassword();
    }
}

// Countdown Timer
function updateTimer() {
    let startDate = new Date("2024-07-19T22:50:00").getTime();
    let now = new Date().getTime();
    let difference = now - startDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update countdown every second
setInterval(updateTimer, 1000);

// Page Navigation
function nextPage(pageId) {
    let pages = document.querySelectorAll("#main-content > div");
    pages.forEach(page => page.classList.add("hidden"));

    document.getElementById(pageId).classList.remove("hidden");
}
