document.addEventListener("DOMContentLoaded", () => {
    showPage("loginPage");
    updateCountdown();
});

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

// Keypad functionality
let enteredPassword = "";
const correctPassword = "22022009";

function addNumber(num) {
    enteredPassword += num;
    document.getElementById("passwordInput").value = enteredPassword;
}

function clearPassword() {
    enteredPassword = "";
    document.getElementById("passwordInput").value = "";
}

function checkPassword() {
    if (enteredPassword === correctPassword) {
        showPage("countdownPage");
    } else {
        alert("Wrong Password!");
        clearPassword();
    }
}

// Countdown Timer
function updateCountdown() {
    const startDate = new Date("July 19, 2024 22:50:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const elapsed = now - startDate;
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `${days} days since that moment`;
    }, 1000);
}
