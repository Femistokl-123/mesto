const popup = document.querySelector('.popup');
const Edit_button = document.querySelector('.profile-main__edit-button');
const author = document.querySelector('.profile-main__author');
const job = document.querySelector('.profile-main__job');
const nameInput = document.querySelector('.popup__input_type_name');
const infInput = document.querySelector('.popup__input_type_inf');
const close = document.querySelector('.popup__close');
const form = document.querySelector('.popup__form');

function OpenForm() {
    popup.classList.toggle('popup_opened');
    nameInput.value = author.textContent;
    infInput.value = job.textContent;
}

function CloseForm() {
    popup.classList.toggle('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault()
    author.textContent = nameInput.value;
    job.textContent = infInput.value;
    popup.classList.toggle('popup_opened');

}

Edit_button.addEventListener("click", OpenForm);
close.addEventListener("click", CloseForm);
form.addEventListener("submit", handleFormSubmit);