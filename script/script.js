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

const popupSaveButton = document.querySelector('.popup__button');

const elementsGrid = document.querySelector('.elements-grid');

function editClosePopup(popup) {
    document.addEventListener('keydown', closeFieldPopupEsc);
    popup.classList.add('popup_opened');
}
console.log(editClosePopup);

function closePopupEsc(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeFieldPopupEsc);
}
console.log(closePopupEsc);

/*
function closeFieldPopupEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopupEsc(openedPopup);
    }
}
console.log(closeFieldPopupEsc);
*/

function editPopupImage(popupAddCard) {
    editClosePopup(popupAddCard);
    titleInput.value = '';
    linkInput.value = '';
    popupSaveButton.classList.add('popup__button_disabled');
    popupSaveButton.setAttribute('disabled', true);
}
console.log(editPopupImage);

function prepareClick(evt, popup) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopupEsc(popup);
    }
}
console.log(prepareClick);

/*
buttonClosePopupEditProfile.addEventListener('click', () => closePopupEsc(popupProfile));
buttonClosePopupAddCard.addEventListener('click', () => closePopupEsc(popupAddCard));
buttonClosePopupPhoto.addEventListener('click', () => closePopupEsc(popupPhoto));
*/

popupAddCard.addEventListener('mousedown', (evt) => prepareClick(evt, popupAddCard));
popupProfile.addEventListener('mousedown', (evt) => prepareClick(evt, popupProfile));
popupPhoto.addEventListener('mousedown', (evt) => prepareClick(evt, popupPhoto));

function createCard(card) {
    const cardAdd = cardsTemplate.querySelector('.elements-grid__item').cloneNode(true);
    const cardName = cardAdd.querySelector('.elements-grid__name');
    cardName.textContent = card.name;

    const cardImage = cardAdd.querySelector('.elements-grid__image');
    cardImage.setAttribute('src', card.link);
    cardImage.setAttribute('alt', card.name);

    const cardDelete = cardAdd.querySelector('.elements-grid__delete');
    cardDelete.addEventListener('click', deleteCard);

    const cardLike = cardAdd.querySelector('.elements-grid__icon');
    cardLike.addEventListener('click', likeCard);

    const cardZoom = cardAdd.querySelector('.elements-grid__zoom');
    cardZoom.addEventListener('click', () => zoomPhoto(card));
    function zoomPhoto(card) {
        popupSubtitleAdd.textContent = card.name;
        popupPictureAdd.setAttribute('src', card.link);
        popupPictureAdd.setAttribute('alt', card.name);
        toggleButtonPopup(popupPhoto);
    }
    return cardAdd;
}

function addProfileCard(card) {
    const cardAddForm = createCard(card);
    elementsGrid.prepend(cardAddForm);
}

initialCards.forEach(addProfileCard);

function deleteCard(event) {
    const buttonCard = event.target;
    const card = buttonCard.closest('.elements-grid__item');
    card.remove();
}

function toggleButtonPopup(popup) {
    popup.classList.toggle('popup_opened');
}

function changeProfile() {
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
}

function submitHandleUserForm(event) {
    event.preventDefault();
    authorElement.textContent = nameInput.value;
    jobElement.textContent = infInput.value;
    toggleButtonPopup(popupProfile);
}

function submitHandleAddForm(event) {
    event.preventDefault();
    const nameAdd = titleInput.value;
    const linkAdd = linkInput.value;
    const card = {
        name: nameAdd,
        link: linkAdd
    };
    addProfileCard(card);
    toggleButtonPopup(popupAddCard);
    submitElementAddForm.reset();
}

function likeCard(event) {
    const cardLike = event.target;
    cardLike.classList.toggle('elements-grid__icon_like');
}

buttonOpenPopupEditProfile.addEventListener('click', function () {
    toggleButtonPopup(popupProfile);
    changeProfile();
});

buttonOpenPopupAddCard.addEventListener('click', function () {
    toggleButtonPopup(popupAddCard);
});

buttonClosePopupEditProfile.addEventListener('click', function () {
    toggleButtonPopup(popupProfile);
});

buttonClosePopupAddCard.addEventListener('click', function () {
    toggleButtonPopup(popupAddCard);
});

buttonClosePopupPhoto.addEventListener('click', function () {
    toggleButtonPopup(popupPhoto);
});

submitElementProfileForm.addEventListener('submit', submitHandleUserForm);

submitElementAddForm.addEventListener('submit', submitHandleAddForm);

