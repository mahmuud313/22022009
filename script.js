const correctPassword = "1972024";
let enteredPassword = "";

function pressKey(number) {
    enteredPassword += number;
    document.getElementById("passwordDisplay").textContent = enteredPassword;
}

function clearPassword() {
    enteredPassword = "";
    document.getElementById("passwordDisplay").textContent = enteredPassword;
}

function submitPassword() {
    if (enteredPassword === correctPassword) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("contentPage").style.display = "block";
        startCountdown();
    } else {
        alert("Incorrect password, please try again.");
    }
}

function startCountdown() {
    const countdownDate = new Date("2025-02-22T00:00:00").getTime();
    const countdownDisplay = document.getElementById("countdownDisplay");

    setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
