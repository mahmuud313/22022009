document.addEventListener("DOMContentLoaded", function () {
    showPage("login-page");
    updateTimer();
});

const correctPassword = "112025";
let enteredPassword = "";

function enterDigit(digit) {
    if (enteredPassword.length < 6) {
        enteredPassword += digit;
        document.getElementById("passwordInput").value = "*".repeat(enteredPassword.length);
    }
}

function clearPassword() {
    enteredPassword = "";
    document.getElementById("passwordInput").value = "";
}

function checkPassword() {
    if (enteredPassword === correctPassword) {
        showPage("timer-page");
    } else {
        alert("Wrong password! Try again.");
        clearPassword();
    }
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "flex";
}

function nextPage(pageId) {
    showPage(pageId);
}

function updateTimer() {
    const startDate = new Date("July 19, 2024 22:50:00").getTime();
    const now = new Date().getTime();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("time-counter").textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes`;
}
