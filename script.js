// Function to Check Password
function checkPassword() {
    let input = document.getElementById("password").value;
    if (input === "1972024") {
        showPage("albumPage", "album");
    } else {
        alert("Wrong password! Try again.");
    }
}

// Add Number to Keypad Input
function addNumber(num) {
    document.getElementById("password").value += num;
}

// Clear Keypad Input
function clearInput() {
    document.getElementById("password").value = "";
}

// Show Specific Page
function showPage(pageId, bgClass) {
    document.querySelectorAll(".page").forEach(div => div.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
    document.body.className = bgClass;
}

// Countdown Timer from 19/07/2024 10:50 PM
function startCountdown() {
    const startDate = new Date("July 19, 2024 22:50:00").getTime();
    setInterval(() => {
        let now = new Date().getTime();
        let elapsed = now - startDate;
        let days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        let hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }, 1000);
}

// Start Countdown on Load
startCountdown();
