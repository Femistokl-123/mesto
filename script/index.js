export { openPopup };
import FormValidator, { validationSettings } from "./FormValidator.js";
import Card from "./card.js";
import { initialCards } from "./initialCards.js";
import { validationSettings } from "./FormValidator.js";

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

function openEditProfileForm() {
    openPopup(popupProfile);
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
    validateEditForm.resetValidation();
}

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

function createCard(popup) {
    const card = new Card(popup, '.elements-grid');
    const cardAdd = card.createCard();
    const cardDelete = cardAdd.querySelector('.elements-grid__delete');
    cardDelete.addEventListener('click', deleteCard);
    return cardAdd;
}

initialCards.forEach((popup) => {
    elementsGrid.append(createCard(popup));
});

const validateAddForm = new FormValidator(validationSettings, submitElementAddForm);
validateAddForm.enableValidation();

const validateEditForm = new FormValidator(validationSettings, submitElementProfileForm);
validateEditForm.enableValidation();

function handleFormSubmitAdd(evt) {
    evt.preventDefault();
    const newCardData = ({ name: titleInput, link: linkInput});
    closePopup(popupAddCard);
    elementsGrid.prepend(createCard(newCardData));
    submitElementAddForm.reset();
    validateAddForm.toggleButtonState();
}

submitElementProfileForm.addEventListener('submit', submitUserForm);

buttonOpenPopupEditProfile.addEventListener('click', openEditProfileForm);

buttonOpenPopupAddCard.addEventListener('click', function() {
    openPopup(popupAddCard);
    validateAddForm.resetValidation();
    submitElementAddForm.reset();
});

submitElementAddForm.addEventListener('submit', handleFormSubmitAdd);

function handleOverlay(evt, popup) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
    }
}

popupAddCard.addEventListener('mousedown', (evt) => handleOverlay(evt, popupAddCard));
popupProfile.addEventListener('mousedown', (evt) => handleOverlay(evt, popupProfile));
popupPhoto.addEventListener('mousedown', (evt) => handleOverlay(evt, popupPhoto));

function handleEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function deleteCard(event) {
    const buttonCard = event.target;
    const card = buttonCard.closest('.elements-grid__item');
    card.remove();
}

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