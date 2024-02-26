function slider(container) {
  const swiper = new Swiper(container, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000, // задержка между слайдами
      disableOnInteraction: false, // отключение автопрокрутки при взаимодействии пользователя
      pauseOnMouseEnter: true // остановка автопрокрутки при наведении мыши
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
    
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true, // делаем пагинацию кликабельной
    // }
  });
}

export default slider;