let popup = document.querySelector('.popup');
let Edit_button = document.querySelector('.profile-main__edit-button');
let author = document.querySelector('.profile-main__author');
let job = document.querySelector('.profile-main__job');
let nameInput = document.querySelector('.popup__input_type_name');
let infInput = document.querySelector('.popup__input_type_inf');
let close = document.querySelector('.popup__close');
let form = document.querySelector('.popup__form');

Edit_button.addEventListener("click", OpenForm);
close.addEventListener("click", CloseForm);
formElement.addEventListener("submit", handleFormSubmit);

function OpenForm() {
    popup.classList.toggle('popup_opened');
    nameInput.value = author.textContent;
    infInput = job.textContent;
}

function CloseForm() {
    popup.classList.toggle('popup_opened');
}