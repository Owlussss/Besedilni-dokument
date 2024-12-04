// 1) dark mode toggle
const darkModeButton = document.getElementById("darkmode");
const body = document.body; // Target the body to toggle dark mode

darkModeButton.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    body.classList.toggle("dark-mode");
});

// 2) show date
