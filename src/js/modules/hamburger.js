function hamburger () {
    const menu = document.querySelector('.navbar__wrapper'),
          link = document.querySelectorAll('.menu__item'),
          hamburger = document.querySelector('.navbar__hamburger'),
          close = document.querySelector('.closeMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('navbar__hamburger_active');
        menu.classList.toggle('navbar__wrapper_active');
    });

    close.addEventListener('click', () => {
        hamburger.classList.toggle('navbar__hamburger_active');
        menu.classList.toggle('navbar__wrapper_active');
    });

    link.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('navbar__hamburger_active');
            menu.classList.toggle('navbar__wrapper_active');
        });
    });
}

export default hamburger;