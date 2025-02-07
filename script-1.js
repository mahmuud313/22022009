function checkPassword() {
    var password = document.getElementById("password-input").value;
    if (password === "22022025") {  // Change this password
        document.getElementById("login-page").style.display = "none";
        document.getElementById("album-page").classList.remove("hidden");
    } else {
        alert("Wrong password! Try again.");
    }
}

function showMessagePage() {
    document.getElementById("album-page").classList.add("hidden");
    document.getElementById("message-page").classList.remove("hidden");
}

function showAlbumPage() {
    document.getElementById("message-page").classList.add("hidden");
    document.getElementById("album-page").classList.remove("hidden");
}
