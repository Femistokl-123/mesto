/*import { zoomPhoto } from "./vary.js";

class Card {
    constructor(card, cardsTemplate) {
        this._card = card;
        this._cardsTemplate = cardsTemplate;
    }

    _generateCardElement = () => {
        this._cardElement = this._cardsTemplate.querySelector('.elements-grid__item').cloneNode(true);
        this._cardElement.querySelector('.elements-grid__name').textContent = this._card.name;

        this._cardImage = this._cardElement.querySelector('.elements-grid__image');
        this._cardImage.src = this._card.link;
        this._cardImage.alt = this._card.name;
    }

    _deleteCard = () => {
        this._cardElement.remove();
    }

    _toggleLike = (button) => {
        button.classList.toggle('elements-grid__icon_like');
    }

    _setListeners = () => {
        const cardLike = cardAdd.querySelector('.elements-grid__icon');
        const cardDelete = cardAdd.querySelector('.elements-grid__delete');

        cardDelete.addEventListener('click', this._deleteCard);
        cardLike.addEventListener('click', this._toggleLike);

        this._cardImage.addEventListener('click', () => {zoomPhoto(this._card)});
    }

    createCardElement = () => {
        this._generateCardElement();
        this._setListeners();
        return this._cardElement;
    }
}

export default Card;*/