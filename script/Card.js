import {openPopup, popupPhoto, popupPictureAdd, popupSubtitleAdd} from './index.js';

class Card {
    constructor(link, name, cardsTemplate) {
        this._link = link;
        this._name = name;
        this._cardsTemplate = cardsTemplate;
        this._cardElement = document.querySelector(`#${this._cardsTemplate}`).content.querySelector(`.${this._cardsTemplate}`).cloneNode(true);
        this._cardElementImage = this._cardElement.querySelector('.elements-grid__image');
        this._cardElementTitle = this._cardElement.querySelector('.elements-grid__name');
    }

    _setEventListener(cardElement) {
        cardElement.querySelector('.elements-grid__icon').addEventListener('click', function (evt) {
            evt.target.classList.toggle('elements-grid__icon_like');
        });
        cardElement.querySelector('.elements-grid__delete').addEventListener('click', function (evt) {
            cardElement.remove();
        });
        this._cardElementImage.addEventListener('click', () => {
            openPopup(popupPhoto);
            popupPictureAdd.setAttribute('src', this._link);
            popupPictureAdd.setAttribute('alt', this._name);
            popupSubtitleAdd.textContent = this._name;
        });
    }

    createCardClone() {
        this._setEventListener(this._cardElement);
        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = this._name;
        this._cardElementTitle.textContent = this._name;
        return this._cardElement;
    }
}

export {Card};