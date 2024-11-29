// dark mode toggle
const darkModeButton = document.getElementById("dark-mode-btn");
const nav = document.getElementsByTagName("nav");

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
})

