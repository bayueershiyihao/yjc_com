const login = document.querySelector(".login");
const loginPopup2 = document.querySelector(".login-popup");
const menuBtn = document.querySelector(".menu-toggle_btn");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu_show");

function loginPopup(e) {
  const loginContainer = document.querySelector(".login-container");
  loginContainer.classList.toggle("display-none");
}

function toggleBtnMenu() {
  let widthSize = window.innerWidth;
  if (widthSize < 600) {
    menu.classList.add("display-none");
    menuBtn.classList.remove("display-none");
  } else {
    menu.classList.remove("display-none");
    menuBtn.classList.add("display-none");
  }
}

function showToggleMenu() {
  const mobileClose = document.querySelector(".mobile-close");
  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.add("display-none");
  });
  mobileMenu.classList.remove("display-none");
}

function init() {
  menuBtn.addEventListener("click", showToggleMenu);
  window.addEventListener("resize", toggleBtnMenu);
  window.addEventListener("load", toggleBtnMenu);
  login.addEventListener("click", loginPopup);
}

init();
