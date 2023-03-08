const popupContent = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupAdd = document.querySelector('.popup_add');
const popupPhoto = document.querySelector('.popup_photo');

const editButton = document.querySelector('.profile-main__edit-button');
const authorElement = document.querySelector('.profile-main__author');
const jobElement = document.querySelector('.profile-main__job');
const nameInput = document.querySelector('.popup__input_type_name');
const infInput = document.querySelector('.popup__input_type_inf');
const closeButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const mainButton = document.querySelector('.profile-main__button');
const saveButton = document.querySelector('.popup__button');
const elementsGrid = document.querySelector('.elements-grid');
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');

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

function openAddForm() {
    popupAdd.classList.toggle('popup_opened');
}

function openEditForm() {
    popupContent.classList.toggle('popup_opened');
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
}

function openPhotoForm() {
    popupPhoto.classList.toggle('popup_opened');
}

function closeForm() {
    popupContent.classList.toggle('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    authorElement.textContent = nameInput.value;
    jobElement.textContent = infInput.value;
    popupContent.classList.toggle('popup_opened');
}

function createCard(card) {
    const cardAdd = document.querySelector('#cards-template').content.cloneNode(true);
    const cardName = cardAdd.querySelector('.elements-grid__name');
    cardName.textContent = card.name;

    const cardImage = cardAdd.querySelector('.elements-grid__image');
    cardImage.setAttribute('src', card.link);

    const cardImageAlt = cardAdd.querySelector('.elements-grid__image');
    cardImageAlt.setAttribute('alt', card.name);

    cardAdd.querySelector('.elements-grid__icon').addEventListener('click', function(event) {
        event.target.classList.toggle('elements-grid__icon_like');
    });

    cardAdd.querySelector('.element-grid__delete').addEventListener('click', function(event) {
        event.target.closest('.elements-grid__item').remove();
    });

    cardImage.addEventListener('click', () => {
        openPhotoForm();

        const popupImage = document.querySelector('.popup__picture');
        popupImage.src = cardImage.src;
        popupImage.alt = cardImage.alt;

        const popupDescription = document.querySelector('.popup__subtitle-photo');
        popupDescription.textContent = cardName.textContent;
    });
    return cardAdd;
}

initialCards.forEach(function (item) {
    const card = createCard(item);
    elementsGrid.prepend(card);
});

const addForm = document.querySelector('.popup__form-add');
addForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
    evt.preventDefault();
    const cardNameInput = popup__input_type_title.value;
    const cardLinkInput = popup__input_type_link.value;
    const newCard = {
        name: cardNameInput,
        link: cardLinkInput,
    }
    elementsGrid.prepend(createCard(newCard));
    addForm.reset();
    closeForm(popupAdd);
}

mainButton.addEventListener("click", openAddForm);
editButton.addEventListener("click", openEditForm);
closeButton.addEventListener("click", closeForm);
formElement.addEventListener("submit", handleFormSubmit);