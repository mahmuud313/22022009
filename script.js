let currentPage = 'login-page';
let passwordInput = '';
const correctPassword = '1972024';

function checkPassword() {
    if (passwordInput === correctPassword) {
        nextPage('timer-page');
    } else {
        alert('Incorrect password, please try again.');
        passwordInput = '';
        document.getElementById('password-input').value = '';
    }
}

function addToPassword(number) {
    passwordInput += number;
    document.getElementById('password-input').value = passwordInput;
}

function nextPage(pageId) {
    document.getElementById(currentPage).style.display = 'none';
    currentPage = pageId;
    document.getElementById(currentPage).style.display = 'block';
}

function updateTimer() {
    const startDate = new Date('July 19, 2024 22:50:00');
    const currentDate = new Date();
    const timeDifference = currentDate
