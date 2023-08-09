const body = document.querySelector("body");
const nav = body.querySelector(".header__nav");
const navToggle = body.querySelector(".mobile-nav__toggle");

function handleNavToggleClick() {
  const isVisible = nav.getAttribute("data-visible");
  if (isVisible === "false") {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
  body.classList.toggle("no-scroll");
}

navToggle.addEventListener("click", handleNavToggleClick);