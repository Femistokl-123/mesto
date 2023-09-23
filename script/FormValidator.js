class FormValidator {
    constructor(validationSettings, formElement) {
        this._validationSettings = validationSettings;
        this._formElement = formElement;
        /*this._formSelector = validationSettings._formSelector;*/
        /*this._inputSelector = validationSettings._inputSelector;*/
        /*this._submitButtonSelector = validationSettings._submitButtonSelector;*/
        /*this._inactiveButtonClass = validationSettings._inactiveButtonClass;*/
        /*this._inputErrorClass = validationSettings._inputErrorClass;*/
        /*this._errorClass = validationSettings._errorClass;*/
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
        this._button = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
    }

    _showInputError(inputElement, errorMessage) {
        const formError = this._formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add(this._inputErrorClass);
        formError.textContent = errorMessage;
        formError.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const formError = this._formElement.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        formError.textContent = '';
        formError.classList.remove(this._errorClass);
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    resetValidation() {
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }

    toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._button.classList.add(this.inactiveButtonClass);
            this._button.setAttribute('disabled', true);
        } else {
            this._button.classList.remove(this._inactiveButtonClass);
            this._button.removeAttribute('disabled', false);
        }
    }

    _setEventListeners() {
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
}

export default FormValidator;
