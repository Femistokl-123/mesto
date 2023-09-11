import { openPopup } from "./index.js";

class Card {
    constructor(data, cardsTemplate) {
        this._name = data.name;
        this._link = data.link;
        this._cardsTemplate = cardsTemplate;
    }

    _getTemplate() {
        const cardAdd = document.querySelector(this._cardsTemplate).content.querySelector('.elements-grid__item').cloneNode(true);
        return cardAdd;
    }

    generationCard() {
        this._card = this._getTemplate;
        this._cardImage = this._card.querySelector('.elements-grid__image');
        this._setEventListeners();

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._card.querySelector('.elements-grid__name').textContent = this._name;
        return this._card;
    }

    _deleteCard() {
        this._card.remove();
    }

    _toggleLike() {
        this._cardLike.classList.toggle('elements-grid__icon_like');
    }

    _zoomPhoto() {
        openPopup(this._popupPhoto);
        this._popupPictureAdd.src = this._link;
        this._popupPictureAdd.alt = this._name;
        this._popupSubtitleAdd.textContent = this._name;
    }

    _setEventListeners() {
        this._cardLike = this._card.querySelector('.element-grid_icon');
        this._cardLike.addEventListener('click', () => {
            this._toggleLike();
        });

        this._buttonCard = this._card.querySelector('.element-grid_delete');
        this._buttonCard.addEventListener('click', () => {
            this._deleteCard();
        });

        this._popupPhoto = document.querySelector('.');
        this._popupPictureAdd = this._popupPhoto.querySelector('.');
        this._popupSubtitleAdd = this._popupPhoto.querySelector('.');
        this._cardImage.addEventListener('click', () => {
            this._zoomPhoto();
        });
    }
}

export default Card;