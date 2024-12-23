// 1) dark mode toggle
const darkModeButton = document.getElementById("darkmode");
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle("dark-mode");
});

// 2) show date
function showDate() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('datetime').textContent = dateTimeString;
}

setInterval(showDate, 1000);

// 3) cookie clicker
let cookies = 0

function updateCookie() {
    document.getElementById('cookieCount').textContent = cookies;
}

function cookieClick() {
    cookies += 1;
    updateCookie();
}

document.getElementById('cookieButton').addEventListener('click', cookieClick);
