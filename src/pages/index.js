import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { initialCards } from "../utils/constant.js";
import { validationSettings } from "../utils/constant.js";

import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_add');
const popupPhoto = document.querySelector('.popup_photo');

const submitElementProfileForm = document.querySelector('.popup__form-profile');
const submitElementAddForm = document.querySelector('.popup__form-add');

const cardsTemplate = document.querySelector('#cardstemplate').content;
const nameInput = document.querySelector('#nameInput');
const infInput = document.querySelector('#infInput');
const titleInput = document.querySelector('#titleInput');
const linkInput = document.querySelector('#linkInput');

const buttonOpenPopupEditProfile = document.querySelector('.profile-main__edit-button');
const buttonOpenPopupAddCard = document.querySelector('.profile-main__button');
const authorElement = document.querySelector('.profile-main__author');
const jobElement = document.querySelector('.profile-main__job');

const buttonClosePopupEditProfile = document.querySelector('.popup__close');
const buttonClosePopupAddCard = document.querySelector('.popup__close_add');
const buttonClosePopupPhoto = document.querySelector('.popup__close_photo');

const popupPictureAdd = document.querySelector('.popup__picture');
const popupSubtitleAdd = document.querySelector('.popup__subtitle-photo');

const popupSaveButton = document.querySelector('.popup__button_save');
const cardFormSubmitButton = document.querySelector('.popup__button_add');

const elementsGrid = document.querySelector('.elements-grid');
/* New */
const imagePopup = new PopupWithImage(popupPhoto);

const userInfo = new UserInfo(authorElement, jobElement);

const infoPopupForm = new PopupWithForm(popupProfile, {
    handleFormSubmitAdd: ({ name, inf }) => {
        userInfo.setUserInfo({ name, inf });
        infoPopupForm.close();
    },
});
infoPopupForm.setEventListeners();

const popupAdd = new PopupWithForm(popupAddCard, {
    handleFormSubmitAdd: (data) => {
        defaultCards.addItem(createCard(data));
        popupAdd.close();
    },
});
popupAdd.setEventListeners();

const createCard = (item) => {
    const card = new Card ({
        data: item,
        handleCardClick: (link, name) => {
            imagePopup.open(link, name);
        },
    },
    "#cardstemplate"
    );
    const cardAdd = card.createCard();
    return cardAdd;
}
imagePopup.setEventListeners();

const defaultCards = new Section({
    items: initialCards,
    renderer: (item) => {
        defaultCards.addItem(createCard(item));
    },
},
    elementsGrid
);

defaultCards.rendererItems(initialCards);

const validateAddForm = new FormValidator(validationSettings, submitElementAddForm);
validateAddForm.enableValidation();

const validateEditForm = new FormValidator(validationSettings, submitElementProfileForm);
validateEditForm.enableValidation();

buttonOpenPopupAddCard.addEventListener("click", () => {
    popupAdd.open();
    validateAddForm.resetValidation();
});

buttonOpenPopupEditProfile.addEventListener("click", () => {
    infoPopupForm.setInputValues(userInfo.getUserInfo());
    infoPopupForm.open();
    validateEditForm.resetValidation();
});
/* --- */

/*Открытие и закрытие*/
/*function openPopup(popup) {
    document.addEventListener('keydown', handleEscape);
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
}

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function openCardPopup(popupAddCard) {
    openPopup(popupAddCard);
    submitElementAddForm.reset();
    validateAddForm.toggleButtonState();
}

buttonOpenPopupAddCard.addEventListener('click', () => openCardPopup(popupAddCard));

function openEditProfileForm() {
    openPopup(popupProfile);
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
    validateEditForm.resetValidation();
}

function handleOverlay(evt, popup) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
    }
}

popupAddCard.addEventListener('mousedown', (evt) => handleOverlay(evt, popupAddCard));
popupProfile.addEventListener('mousedown', (evt) => handleOverlay(evt, popupProfile));
popupPhoto.addEventListener('mousedown', (evt) => handleOverlay(evt, popupPhoto));*/
/*---*/

/*---*/
/*function fillProfileInputs() {
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
}*/

/*function submitUserForm(event) {
    event.preventDefault();
    authorElement.textContent = nameInput.value;
    jobElement.textContent = infInput.value;
    closePopup(popupProfile);
}*/

/*function handleOpenPopup(name, link) {
    popupPictureAdd.src = link;
    popupPictureAdd.alt = name;
    popupSubtitleAdd.textContent = name;
    openPopup(popupPhoto);
}*/

/*function createCard(cardData) {
    const card = new Card(cardData, "#cardstemplate", handleOpenPopup);
    const cardAdd = card.createCard();
    return cardAdd;
}*/

/*initialCards.forEach((cardData) => {
    elementsGrid.append(createCard(cardData));
});

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
});*/
/*---*/

/*function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    const newCardData = ({ name: titleInput.value, link: linkInput.value });
    closePopup(popupAddCard);
    elementsGrid.prepend(createCard(newCardData));
}*/

/*buttonOpenPopupEditProfile.addEventListener('click', openEditProfileForm);*/

/*buttonOpenPopupAddCard.addEventListener('click', function () {
    openPopup(popupAddCard);
    validateAddForm.resetValidation();
    submitElementAddForm.reset();
});*/

/*submitElementAddForm.addEventListener('submit', handleFormSubmitAdd);
submitElementProfileForm.addEventListener('submit', submitUserForm);*/