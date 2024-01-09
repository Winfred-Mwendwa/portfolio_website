function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function toggleDarkMode() {
  const icon = document.getElementById("dark-mode-icon");
  icon.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      icon.src = "./assets/sun.png"
    } else {
      icon.src = "./assets/moon.png"
    }
  }
}