var menuBtn = document.querySelector(".menu-btn");
var navItems = document.querySelector(".nav_background");
var menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navItems.classList.remove("hidden");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navItems.classList.add("hidden");
    menuOpen = false;
  }
});
