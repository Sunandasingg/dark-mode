
        const themeToggle = document.getElementById("theme-toggle");
        const body = document.body;
        const starsContainer = document.getElementById("stars");
        function generateStars() {
            for (let i = 0; i < 100; i++) {
                let star = document.createElement("div");
                star.style.left = Math.random() * 100 + "%";
                star.style.top = Math.random() * 100 + "%";
                star.style.animationDelay = Math.random() * 1 + "s";
                starsContainer.appendChild(star);
            }
        }
        function setTheme(theme) {
            if (theme === "dark") {
                body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
                themeToggle.checked = true;
            } else {
                body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
                themeToggle.checked = false;
            }
        }
        themeToggle.addEventListener("change", () => {
            const currentTheme = localStorage.getItem("theme");
            setTheme(currentTheme === "dark" ? "light" : "dark");
        });
        document.addEventListener("DOMContentLoaded", () => {
            const savedTheme = localStorage.getItem("theme") || "light";
            setTheme(savedTheme);
            generateStars();
        });
    