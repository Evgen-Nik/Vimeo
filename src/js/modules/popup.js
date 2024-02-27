function closePopup(popupSelector) {
    const popup = document.querySelector(popupSelector);
    popup.classList.add('hide');
    popup.classList.remove('show');
}

function openPopup(popupSelector, popupImgId, imgID) {
    const popup = document.querySelector(popupSelector),
          popupImg = document.getElementById(popupImgId),
          img = document.getElementById(imgID);
          
    popupImg.src = img.src;
    popup.classList.add('show');
    popup.classList.remove('hide');
}

function popup (popupSelector, popupImgId) {
    
    const popup = document.querySelector(popupSelector),
          images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('click', () => openPopup(popupSelector, popupImgId, img.id));
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