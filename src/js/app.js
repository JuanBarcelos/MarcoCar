function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = 'src/img/menu.svg';
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = 'src/img/close.svg';
  }
}


  var emblaNode = document.querySelector('.embla')
  var options = { loop: false }
  var embla = EmblaCarousel(emblaNode, options)
  var emblaNode = document.querySelector('.embla')
  var options = { loop: false }
  var plugins = [EmblaCarouselAutoplay()] // Plugins
  var embla = EmblaCarousel(emblaNode, options, plugins)

