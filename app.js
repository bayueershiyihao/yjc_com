function toggleBtnMenu() {
  const menu = document.querySelector(".menu");
  const menuBtn = document.querySelector(".menu-toggle_btn");
  let widthSize = window.innerWidth;
  if (widthSize < 600) {
    menu.classList.add("toggle-btn");
    menuBtn.classList.remove("toggle-btn");
  } else {
    menu.classList.remove("toggle-btn");
    menuBtn.classList.add("toggle-btn");
  }
}

window.addEventListener("resize", toggleBtnMenu);
