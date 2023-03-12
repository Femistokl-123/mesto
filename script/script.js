const popupProfile = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const popupPhoto = document.querySelector('.popup_photo');

const formElementProfile = document.querySelector('.popup__form-profile');
const formElementAdd = document.querySelector('.popup__form-add');

const cardTemplate = document.querySelector('#cardstemplate');
const nameInput = document.querySelector('#nameInput');
const infInput = document.querySelector('#infInput');
const titleInput = document.querySelector('#titleInput');
const linkInput = document.querySelector('#linkInput');

const editButton = document.querySelector('.profile-main__edit-button');
const mainButton = document.querySelector('.profile-main__button');
const authorElement = document.querySelector('.profile-main__author');
const jobElement = document.querySelector('.profile-main__job');

const popupcloseButton = document.querySelector('.popup__close');
const popupCloseAdd = document.querySelector('.popup__close-button_add');
const popupClosePhoto = document.querySelector('.popup__close-button_photo');

const popupPicture = document.querySelector('.popup__picture');
const popupSubtitle = document.querySelector('.popup__subtitle-photo');

const elementsGrid = document.querySelector('.elements-grid');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function createCard(card) {
    const cardAdd = cardTemplate.cloneNode(true);
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
        popupSubtitle.textContent = card.name;
        popupPicture.setAttribute('src', card.link);
        popupPicture.setAttribute('alt', card.name);
        openPopupPhoto(popupPhoto);
    }
    return cardAdd;
}

function plusCard(card) {
    const cardReady = createCard(card);
    elementsGrid.prepend(cardReady);
}

function deleteCard(event) {
    const button = event.target;
    const card = button.closest('.elements-grid__item');
    card.remove();
}

function openPopupProfile(popupProfile) {
    popupProfile.classList.add('popup_opened');
}

function openPopupAdd(popupAdd) {
    popupAdd.classList.add('popup_opened');
}

function openPopupPhoto(popupPhoto) {
    popupPhoto.classList.add('popup_opened');
}

function closePopupProfile(popupProfile) {
    popupProfile.classList.remove('popup_opened');
}

function closePopupAdd(popupAdd) {
    popupAdd.classList.remove('popup_opened');
}

function closePopupPhoto(popupPhoto) {
    popupPhoto.classList.remove('popup_opened');
}

function changeProfile() {
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
}

function handleFormSubmitUser(event) {
    event.preventDefault();
    authorElement.textContent = nameInput.value;
    jobElement.textContent = infInput.value;
    closePopupProfile(popupProfile);
}

function handleFormSubmitAdd(event) {
    event.preventDefault();
    const name = titleInput.value;
    const link = linkInput.value;
    const card = {
        name: name,
        link: link
    };
    plusCard(card);
    closePopupAdd(popupAdd);
}

function likeCard(event) {
    const cardLike = event.target;
    cardLike.classList.toggle('elements-grid__icon_like');
}

editButton.addEventListener('click', function () {
    openPopupProfile(popupProfile);
    changeProfile();
});

mainButton.addEventListener('click', function () {
    openPopupAdd(popupAdd);
});

popupcloseButton.addEventListener('click', function () {
    closePopupProfile(popupProfile);
});

popupCloseAdd.addEventListener('click', function () {
    closePopupAdd(popupAdd);
});


popupClosePhoto.addEventListener('click', function () {
    closePopupPhoto(popupPhoto);
});

formElementProfile.addEventListener('submit', handleFormSubmitUser);

formElementAdd.addEventListener('submit', handleFormSubmitAdd);