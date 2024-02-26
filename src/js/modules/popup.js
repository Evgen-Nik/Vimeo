function closePopup(popupSelector) {
    const popup = document.querySelector(popupSelector);
    popup.classList.add('hide');
    popup.classList.remove('show');
}

function openPopup(popupSelector) {
    const popup = document.querySelector(popupSelector);
    popup.classList.add('show');
    popup.classList.remove('hide');
}

function popup (triggerSelector, popupSelector) {
    
    const popupTrigger = document.querySelectorAll(triggerSelector),
          popup = document.querySelector(popupSelector);
    
    popupTrigger.forEach(btn => {
        btn.addEventListener('click', () => openPopup(popupSelector));
    });
 
    popup.addEventListener('click', (e) => {
        if(e.target === popup || e.target.getAttribute('data-close') == '') {
            closePopup(popupSelector);
        }
    });
 
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && popup.classList.contains('show')) {
            closePopup(popupSelector);
        }
    });
}

export default popup;
export { closePopup };
export { openPopup };