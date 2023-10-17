
export default class Card {
    constructor({ data, handleCardClick }, cardsTemplate) {
        this._name = data.name;
        this._link = data.link;
        this._cardsTemplate = cardsTemplate;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardAdd = document.querySelector(this._cardsTemplate).content.querySelector('.elements-grid__item').cloneNode(true);
        return cardAdd;
    }

    createCard() {
        this._card = this._getTemplate();
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

    _setEventListeners() {
        this._cardLike = this._card.querySelector('.elements-grid__icon');
        this._cardLike.addEventListener('click', () => {
            this._toggleLike();
        });

        this._buttonCardDelete = this._card.querySelector('.elements-grid__delete');
        this._buttonCardDelete.addEventListener('click', () => {
            this._deleteCard();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }
}