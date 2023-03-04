const popupContent = document.querySelector('.popup');
const editButton = document.querySelector('.profile-main__edit-button');
const authorElement = document.querySelector('.profile-main__author');
const jobElement = document.querySelector('.profile-main__job');
const nameInput = document.querySelector('.popup__input_type_name');
const infInput = document.querySelector('.popup__input_type_inf');
const closeButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');

function editCardsElements() {
    const basicCardsTemplate = document.querySelector('#cards-template').сontent;
    const basicCards = basicCardsTemplate.querySelector('.elements-grid__item').cloneNode(true);

    basicCards.querySelector('.elements-grid__icon').addEventListener('click', function (evt) 
    {
        evt.target.classList.toggle('elements-grid__icon_like');
    });
}

function openForm() {
    popupContent.classList.toggle('popup_opened');
    nameInput.value = authorElement.textContent;
    infInput.value = jobElement.textContent;
}

function closeForm() {
    popupContent.classList.toggle('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    authorElement.textContent = nameInput.value;
    jobElement.textContent = infInput.value;
    popupContent.classList.toggle('popup_opened');

}

editButton.addEventListener("click", openForm);
closeButton.addEventListener("click", closeForm);
formElement.addEventListener("submit", handleFormSubmit);