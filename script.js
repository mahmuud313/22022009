let passwordInput = "";
let correctPassword = "112025";

function addToPassword(num) {
    passwordInput += num;
    document.getElementById('password').value = passwordInput;
}

function submitPassword() {
    if (passwordInput === correctPassword) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('timer-page').style.display = 'block';
        startTimer();
    } else {
        alert("Incorrect password. Try again.");
    }
}

function startTimer() {
    const startDate = new Date("July 19, 2024 22:50:00").getTime();
    let timerInterval = setInterval(() => {
        let now = new Date().getTime();
        let timeDiff = now - startDate;
        if (timeDiff >= 0) {
            let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML =
                days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
        }
    }, 1000);
}

function showLetter() {
    document.getElementById('album-page').style.display = 'none';
    document.getElementById('letter-page').style.display = 'block';
}
