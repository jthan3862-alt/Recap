// =======================
// User Accounts
// =======================
const users = {
    "Dhanu": "Dhanu@2003",
    "pav": "pav@2003",
    "tamil": "tamil@2003"
};

// =======================
// Start Dates
// =======================
const startDates = {
    "Dhanu": "2025-03-19",
    "pav": "2025-03-19",
    "tamil": "2026-05-01"
};

const user = localStorage.getItem("friendName");

if (user && startDates[user]) {
    const startDate = new Date(startDates[user]);
    const today = new Date();

    const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent = days;
}
let attempts = 0;

// =======================
// Login Function
// =======================
function login() {

    let name = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value;

    if (users[name] && users[name] === password) {

        localStorage.setItem("friendName", name);

        window.location.href = "home.html";

    } else {

        attempts++;

        alert("Wrong name or password!");

        if (attempts >= 3) {
            alert("Too many attempts!");
        }
    }
}

// =======================
// Home Page
// =======================
window.onload = function () {

    const user = localStorage.getItem("friendName");

    // Welcome Text
    const welcome = document.getElementById("welcome");
    if (user && welcome) {
        welcome.innerHTML = "Welcome "+ + " ❤️";
    }

    // Days Counter
    const dayBox = document.querySelector(".num");

    if (user && dayBox && startDates[user]) {

        const startDate = new Date(startDates[user]);
        const today = new Date();

        const diffTime = today - startDate;
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        dayBox.textContent = days;
    }
};