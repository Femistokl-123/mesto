export default class Section {
    constructor({ items, renderer }, cardSelector) {
        this._items = items;
        this._container = cardSelector;
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    /* Перебор массива */
    rendererItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }
}