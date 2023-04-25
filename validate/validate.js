enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

function showInputError(inputElement, formElement, inputErrorClass, errorClass, errorMessage) {
  const formError = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(errorClass);
}
console.log(showInputError);

function hideInputError(inputElement, formElement, inputErrorClass, errorClass) {
  const formError = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorClass);
  formError.classList.remove(errorClass);
}
console.log(hideInputError);

function isValid(inputElement, formElement, parametres) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, formElement, parametres.inputErrorClass, parametres.errorClass, inputElement.validationMessage);
  } else {
    hideInputError(inputElement, formElement, parametres.inputErrorClass, parametres.errorClass);
  }
}
console.log(isValid);

function enableValidation(parametres) {
  const formList = Array.from(document.querySelectorAll(parametres.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, parametres.inputSelector, parametres);
  });
}
console.log(enableValidation);

function enableButton(button, inactiveButtonClass) {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
}
console.log(enableButton);

function disableButton(button, inactiveButtonClass) {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
}
console.log(disableButton);

function toggleButtonState(inputList, button, parametres) {
  if (inputList.some((input) => !input.validity.valid)) {
    disableButton(button, parametres.inactiveButtonClass);
  } else {
    enableButton(button, parametres.inactiveButtonClass);
  }
}
console.log(toggleButtonState);

function setEventListeners(formElement, inputElement, parametres) {
  const button = formElement.querySelector(parametres.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputElement));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(inputElement, formElement, parametres);
      toggleButtonState(inputList, button, parametres);
    });
  });
}
console.log(setEventListeners);