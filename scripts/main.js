const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("toggleBtn");
navClose = document.getElementById("closeBtn");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
console.log("hiiiii i work");
