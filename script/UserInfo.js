export default class UserInfo {
    constructor(authorElement, jobElement) {
        this._authorElement = authorElement;
        this._jobElement = jobElement;
    }

    getUserInfo() {
        this._userValues = {};
        this._userValues["name"] = this._authorElement.textContent;
        this._userValues["inf"] = this._jobElement.textContent;
        return this._userValues;
    }

    setUserInfo({ name, inf }) {
        this._authorElement.textContent = name;
        this._jobElement.textContent = inf;
    }
}