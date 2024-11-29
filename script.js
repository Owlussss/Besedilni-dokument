// dark mode toggle
const darkModeButton = document.getElementById("dark-mode-btn");
const nav = document.getElementById("nav");

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");

    // check which mode the website is in right now
    if (document.body.classList.contains("dark-mode")) {
        nav.style.backgroundColor = "#";
    } else {
        nav.style.backgroundClip = "#";
    }
});

