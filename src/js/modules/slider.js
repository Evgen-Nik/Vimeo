function slider(container) {
  const swiper = new Swiper(container, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000, // задержка между слайдами
      disableOnInteraction: false, // отключение автопрокрутки при взаимодействии пользователя
      pauseOnMouseEnter: true // остановка автопрокрутки при наведении мыши
    },
    
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true, // делаем пагинацию кликабельной
    // }
  });
}

export default slider;