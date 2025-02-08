let currentPage = 0;
const pages = document.querySelectorAll('.page');
pages[currentPage].style.display = "flex";

let enteredPassword = "";
const correctPassword = "112025";

function enterNumber(num) {
    if (enteredPassword.length < 6) {
        enteredPassword += num;
        document.getElementById("password").value = enteredPassword;
    }
}

function clearPassword() {
    enteredPassword = "";
    document.getElementById("password").value = "";
}

function checkPassword() {
    if (enteredPassword === correctPassword) {
        nextPage();
    } else {
        alert("Wrong Password!");
        clearPassword();
    }
}

function nextPage() {
    pages[currentPage].style.display = "none";
    currentPage++;
    if (currentPage < pages.length) {
        pages[currentPage].style.display = "flex";
    }
}

const startDate = new Date("July 19, 2024 22:50:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const elapsedTime = now - startDate;

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("time-counter").innerHTML = `${days} Days, ${hours} Hours`;
}

setInterval(updateTimer, 1000);
updateTimer();
