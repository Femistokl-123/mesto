const popupProfile = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const popupPhoto = document.querySelector('.popup_photo');

const submitElementProfileForm = document.querySelector('.popup__form-profile');
const submitElementAddForm = document.querySelector('.popup__form-add');

const cardsTemplate = document.querySelector('#cardstemplate').content;
const nameInput = document.querySelector('#nameInput');
const infInput = document.querySelector('#infInput');
const titleInput = document.querySelector('#titleInput');
const linkInput = document.querySelector('#linkInput');

const editProfileButton = document.querySelector('.profile-main__edit-button');
const editMainProfileButton = document.querySelector('.profile-main__button');
const authorElement = document.querySelector('.profile-main__author');
const jobElement = document.querySelector('.profile-main__job');

const closePopupButton = document.querySelector('.popup__close');
const closePopupAdd = document.querySelector('.popup__close_add');
const closePopupPhoto = document.querySelector('.popup__close_photo');

const popupPictureAdd = document.querySelector('.popup__picture');
const popupSubtitleAdd = document.querySelector('.popup__subtitle-photo');

const elementsGrid = document.querySelector('.elements-grid');

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
    toggleButtonPopup(popupAdd);
    submitElementAddForm.reset();
}

function likeCard(event) {
    const cardLike = event.target;
    cardLike.classList.toggle('elements-grid__icon_like');
}

editProfileButton.addEventListener('click', function () {
    toggleButtonPopup(popupProfile);
    changeProfile();
});

editMainProfileButton.addEventListener('click', function () {
    toggleButtonPopup(popupAdd);
});

closePopupButton.addEventListener('click', function () {
    toggleButtonPopup(popupProfile);
});

closePopupAdd.addEventListener('click', function () {
    toggleButtonPopup(popupAdd);
});

closePopupPhoto.addEventListener('click', function () {
    toggleButtonPopup(popupPhoto);
});

submitElementProfileForm.addEventListener('submit', submitHandleUserForm);

submitElementAddForm.addEventListener('submit', submitHandleAddForm);