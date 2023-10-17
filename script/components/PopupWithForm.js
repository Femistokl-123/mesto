import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor({ handleFormSubmitAdd }, popup) {
        super(popup);
        this._handleFormSubmitAdd = handleFormSubmitAdd;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this._formValues = {};
    }

    _getInputValues() {
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmitAdd(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}