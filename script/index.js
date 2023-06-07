import {Card} from "./Card.js";
import {initialCards, configFormSelector} from "./initialCards.js";

/*Редактирование профиля*/
const popupProfile = document.querySelector('.popup_profile');
const submitElementProfileForm = document.querySelector('.popup__form-profile');
const buttonOpenPopupEditProfile = document.querySelector('.profile-main__edit-button');
const buttonClosePopupEditProfile = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__button_save');
const nameInput = document.querySelector('#nameInput');
const infInput = document.querySelector('#infInput');

/*Редактирование фото*/
const popupAddCard = document.querySelector('.popup_add');
const buttonClosePopupAddCard = document.querySelector('.popup__close_add');
const buttonOpenPopupAddCard = document.querySelector('.profile-main__button');
const titleInput = document.querySelector('#titleInput');
const linkInput = document.querySelector('#linkInput');
const cardFormSubmitButton = document.querySelector('.popup__button_add');
const submitElementAddForm = document.querySelector('.popup__form-add');

/*Zoom*/
const popupPhoto = document.querySelector('.popup_photo');
const popupPictureAdd = document.querySelector('.popup__picture');
const popupSubtitleAdd = document.querySelector('.popup__subtitle-photo');
const buttonClosePopupPhoto = document.querySelector('.popup__close_photo');

/*Оставшиеся*/
/*const cardsTemplate = document.querySelector('#cardstemplate').content;*/
const authorElement = document.querySelector('.profile-main__author');
const jobElement = document.querySelector('.profile-main__job');
const elementsGrid = document.querySelector('.elements-grid');

function openPopup(popup) {
    document.addEventListener('keydown', handleEscape);
    popup.classList.add('popup_opened');
}
console.log(openPopup);

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
}
console.log(closePopup);

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}
console.log(handleEscape);

function openCardPopup(popupAddCard) {
    openPopup(popupAddCard);
    titleInput.value = '';
    linkInput.value = '';
    cardFormSubmitButton.classList.add('popup__button_disabled');
    cardFormSubmitButton.setAttribute('disabled', true);
}
console.log(openCardPopup);

buttonOpenPopupAddCard.addEventListener('click', () => openCardPopup(popupAddCard));

function handleOverlay(evt, popup) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
    }
}
console.log(handleOverlay);

popupAddCard.addEventListener('mousedown', (evt) => handleOverlay(evt, popupAddCard));
popupProfile.addEventListener('mousedown', (evt) => handleOverlay(evt, popupProfile));
popupPhoto.addEventListener('mousedown', (evt) => handleOverlay(evt, popupPhoto));

/*function createCard(card) {
    const cardAdd = cardsTemplate.querySelector('.elements-grid__item').cloneNode(true);
    const cardName = cardAdd.querySelector('.elements-grid__name');
    cardName.textContent = card.name;

    const cardImage = cardAdd.querySelector('.elements-grid__image');
    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);

    const cardDelete = cardAdd.querySelector('.elements-grid__delete');
    cardDelete.addEventListener('click', deleteCard);

    const cardLike = cardAdd.querySelector('.elements-grid__icon');
    cardLike.addEventListener('click', toggleLike);

    const cardZoom = cardAdd.querySelector('.elements-grid__zoom');
    cardZoom.addEventListener('click', () => zoomPhoto(card));
    function zoomPhoto(card) {
        popupSubtitleAdd.textContent = card.name;
        popupPictureAdd.setAttribute('src', card.link);
        popupPictureAdd.setAttribute('alt', card.name);
        openPopup(popupPhoto);
    }
    return cardAdd;
}*/

function addCard(card) {
    const cardAddForm = createCard(card);
    elementsGrid.prepend(cardAddForm);
}

initialCards.forEach(addCard);

/*function deleteCard(event) {
    const buttonCard = event.target;
    const card = buttonCard.closest('.elements-grid__item');
    card.remove();
}*/

function fillProfileInputs() {
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
}

function submitUserForm(event) {
    event.preventDefault();
    authorElement.textContent = nameInput.value;
    jobElement.textContent = infInput.value;
    closePopup(popupProfile);
}

function submitAddForm(event) {
    event.preventDefault();
    const nameAdd = titleInput.value;
    const linkAdd = linkInput.value;
    const card = {
        name: nameAdd,
        link: linkAdd
    };
    addCard(card);
    closePopup(popupAddCard);
    submitElementAddForm.reset();
}

/*function toggleLike(event) {
    const cardLike = event.target;
    cardLike.classList.toggle('elements-grid__icon_like');
}*/

buttonOpenPopupEditProfile.addEventListener('click', function () {
    openPopup(popupProfile);
    fillProfileInputs();
});

buttonOpenPopupAddCard.addEventListener('click', function () {
    openPopup(popupAddCard);
});

buttonClosePopupEditProfile.addEventListener('click', function () {
    closePopup(popupProfile);
});

buttonClosePopupAddCard.addEventListener('click', function () {
    closePopup(popupAddCard);
});

buttonClosePopupPhoto.addEventListener('click', function () {
    closePopup(popupPhoto);
});

submitElementProfileForm.addEventListener('submit', submitUserForm);

submitElementAddForm.addEventListener('submit', submitAddForm);

export {openPopup, popupPhoto, popupPictureAdd, popupSubtitleAdd};