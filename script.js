// Password Logic
const correctPassword = "1972024";

function addDigit(digit) {
    document.getElementById("passwordInput").value += digit;
}

function clearInput() {
    document.getElementById("passwordInput").value = "";
}

function checkPassword() {
    const enteredPassword = document.getElementById("passwordInput").value;
    if (enteredPassword === correctPassword) {
        showPage("countdownPage");
    } else {
        alert("Incorrect password, try again!");
        clearInput();
    }
}

// Countdown Timer
function updateCountdown() {
    const startDate = new Date("2024-07-19T22:50:00");
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `${days} days since we started our love.`;
}

// Show Page Function
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add("hidden");
    });
    document.getElementById(pageId).classList.remove("hidden");

    // Update countdown only when showing countdown page
    if (pageId === "countdownPage") {
        updateCountdown();
    }
}

// Start with the login page
document.addEventListener("DOMContentLoaded", () => {
    showPage("loginPage");
});
