require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import modal from './modules/modal';
import slider from './modules/slider';
import { openModal } from './modules/modal';
import subscribe from './modules/subscribe';
import forms from './modules/forms';
import hamburger from './modules/hamburger';
import footer from './modules/footer';
import popup from './modules/popup';
// import { openPopup } from './modules/popup';
// import { closePopup } from './modules/popup';

window.addEventListener('DOMContentLoaded', () => {

    slider('.swiper');

    // $('input[name=phone]').mask('+7 (999) 999-99-99');

    const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 60000);

    modal('[data-modal=signUp]', '.modal', modalTimerID);
    subscribe('.form-subscribe', 'http://localhost:3000/subscribe');

    forms('.form-checking', '.modal', modalTimerID, 'http://localhost:3000/checking');

    hamburger();

    footer();

    popup('.popup', 'popupImg');
});
