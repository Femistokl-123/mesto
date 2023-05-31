export function zoomPhoto(card) {
    const popupPhoto = document.querySelector('.popup_photo');
    const popupPictureAdd = document.querySelector('.popup__picture');
    const popupSubtitleAdd = document.querySelector('.popup__subtitle-photo');
    
    popupSubtitleAdd.textContent = card.name;
    popupPictureAdd.alt = card.name;
    popupPictureAdd.src = card.link;

    openPopup(popupPhoto);
}
console.log(zoomPhoto);

export function openPopup(popup) {
    document.addEventListener('keydown', handleEscape);
    popup.classList.add('popup_opened');
}
console.log(openPopup);

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
}
console.log(closePopup);

export function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
console.log(handleEscape);