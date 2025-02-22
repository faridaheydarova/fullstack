document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
});

document.getElementById("loginButton").addEventListener("click", () => {
    window.location.href = "./hesab.html";
});

const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

if (username && username !== "null") {
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("logoutButton").style.display = "inline";
    document.getElementById("myComputersButton").style.display = "inline";
    document.getElementById("userLabel").innerText += " " + username;
} else {
    document.getElementById("loginButton").style.display = "inline";
    document.getElementById("logoutButton").style.display = "none";
    document.getElementById("myComputersButton").style.display = "none";
    document.getElementById("userLabel").innerText += " istifadəçi daxil olmayıb";
}

function changeToShoppingPage() {
    window.location.href = "shopping.html";
}
