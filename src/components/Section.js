export default class Section {
    constructor({ renderer }, cardSelector) {
        this._renderer = renderer;
        this._container = cardSelector;
    }

    /* Перебор массива */
    rendererItems(data) {
        data.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.append(element);
    }

    addNewItem(element) {
        this._container.prepend(element);
    }
}