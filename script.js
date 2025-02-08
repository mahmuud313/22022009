document.addEventListener("DOMContentLoaded", function () {
    const password = "220225"; // Set your password here
    let input = "";

    const display = document.getElementById("password-display");
    const buttons = document.querySelectorAll(".keypad button");
    const letterContainer = document.getElementById("letter-container");
    const loginContainer = document.getElementById("login-container");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            if (value === "clear") {
                input = "";
            } else if (value === "enter") {
                if (input === password) {
                    letterContainer.style.display = "block";
                    loginContainer.style.display = "none";
                } else {
                    alert("Wrong Password!");
                    input = "";
                }
            } else {
                input += value;
            }

            display.value = input;
        });
    });

    // Countdown Timer
    function updateCountdown() {
        const startDate = new Date("2024-07-19T22:50:00");
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("countdown").innerText =
            `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }

    setInterval(updateCountdown, 1000);
});
