function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "src/img/menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "src/img/close.svg";
  }
}

var emblaNode = document.querySelector(".embla");
var options = { loop: false };
var plugins = [EmblaCarouselAutoplay()]; // Plugins
var embla = EmblaCarousel(emblaNode, options, plugins);

/* carousel script */
const carousel = document.querySelector(".carousel");
firstImg =  document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".slide-jobs .icon");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

let firstImgWidth = firstImg.clientWidth + 14;


arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
