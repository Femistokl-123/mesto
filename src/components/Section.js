export default class Section {
    constructor({ renderer }, cardSelector) {
        this._container = cardSelector;
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    /* Перебор массива */
    rendererItems(data) {
        data.forEach((item) => {
            this._renderer(item);
        });
    }
}