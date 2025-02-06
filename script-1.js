window.onload = function () {
    const message = document.getElementById('message');
    message.style.opacity = 0;
    let fadeEffect = setInterval(function () {
        if (!message.style.opacity) {
            message.style.opacity = 1;
        }
        if (message.style.opacity < 1) {
            message.style.opacity = parseFloat(message.style.opacity) + 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
};
