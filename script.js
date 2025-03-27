// Get DOM elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.querySelector(".mobileNav");
const overlay = document.getElementById("menu-overlay");

// Toggle mobile menu
function toggleMobileMenu() {
  mobileNav.classList.toggle("right-[-100%]");
  mobileNav.classList.toggle("right-0");
  overlay.classList.toggle("active");
}

// Event listeners
mobileMenuBtn.addEventListener("click", toggleMobileMenu);
overlay.addEventListener("click", toggleMobileMenu);

// Close menu when clicking on a link (optional enhancement)
const mobileNavLinks = mobileNav.querySelectorAll("a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", toggleMobileMenu);
});

// Close menu when pressing Escape key (optional enhancement)
document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    !mobileNav.classList.contains("right-[-100%]")
  ) {
    toggleMobileMenu();
  }
});
