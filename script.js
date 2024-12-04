// 1) dark mode toggle
const darkModeButton = document.getElementById("nightmode");
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

// 2) show date
