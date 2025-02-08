document.addEventListener("DOMContentLoaded", function () {
    /* Login System */
    let inputPassword = "";
    const correctPassword = "1972024";

    function updatePasswordDisplay() {
        document.getElementById("password-display").value = "*".repeat(inputPassword.length);
    }

    function enterDigit(digit) {
        if (inputPassword.length < 7) {
            inputPassword += digit;
            updatePasswordDisplay();
        }
    }

    function clearPassword() {
        inputPassword = "";
        updatePasswordDisplay();
    }

    function checkPassword() {
        if (inputPassword === correctPassword) {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("content-container").style.display = "block";
        } else {
            alert("Incorrect Password!");
            clearPassword();
        }
    }

    /* Countdown Timer */
    function updateCountdown() {
        const startDate = new Date("2024-07-19T22:50:00");
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("countdown").innerHTML =
            `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
    setInterval(updateCountdown, 1000);

    /* Handle Page Navigation */
    document.getElementById("next-button").addEventListener("click", function () {
        document.getElementById("album-container").style.display = "none";
        document.getElementById("letter-container").style.display = "block";
    });

    /* Attach Event Listeners to Keypad */
    document.querySelectorAll(".keypad button").forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            if (value === "clear") {
                clearPassword();
            } else if (value === "enter") {
                checkPassword();
            } else {
                enterDigit(value);
            }
        });
    });
});
