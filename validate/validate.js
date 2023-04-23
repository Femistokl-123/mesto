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

function hideInputError(inputElement, formElement, inputErrorClass, errorClass) {
  const formError = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorClass);
  formError.classList.remove(errorClass);
}

function isValid(inputElement, formElement, parametres) {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, formElement, parametres.inputErrorClass, parametres.errorClass, inputElement.validationMessage);
  } else {
    hideInputError(inputElement, formElement, parametres.inputErrorClass, parametres.errorClass);
  }
}

function enableValidation(parametres) {
  const formList = Array.from(document.querySelectorAll(parametres.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, parametres.inputSelector, parametres);
  });
}

function toggleShowButton(button, inactiveButtonClass) {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
}

function toggleHideButton(button, inactiveButtonClass) {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
}

function isVisibleButton(inputList, button, parametres) {
  if (inputList.some((input) => !input.validity.valid)) {
    toggleHideButton(button, parametres.inactiveButtonClass);
  } else {
    toggleShowButton(button, parametres.inactiveButtonClass);
  }
}

function setEventListeners(formElement, inputElement, parametres) {
  const button = formElement.querySelector(parametres.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputElement));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(inputElement, formElement, parametres);
      isVisibleButton(inputList, button, parametres);
    });
  });
}