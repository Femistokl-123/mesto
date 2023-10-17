import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popup) {
        super(popup);
        this._name = this._popup.querySelector('.popup__subtitle-photo');
        this._link = this._popup.querySelector('.popup__picture');
    }

    open(name, link) {
        super.open();
        this._link.src = link;
        this._link.alt = name;
        this._name.textContent = name;
    }
}