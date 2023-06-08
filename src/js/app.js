function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu")
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open")
    document.querySelector(".icon").src = "src/img/menu.svg"
  } else {
    menuMobile.classList.add("open")
    document.querySelector(".icon").src = "src/img/close.svg"
  }
}
