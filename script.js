const nav = document.querySelector(".header__nav");
const navToggle = document.querySelector(".mobile-nav__toggle");

function handleNavToggleClick() {
  const isVisible = nav.getAttribute("data-visible");
  if (isVisible === "false") {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
}

navToggle.addEventListener("click", handleNavToggleClick);