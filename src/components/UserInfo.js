export default class UserInfo {
    constructor(authorElement, jobElement, avatarElement) {
        this._authorElement = authorElement;
        this._jobElement = jobElement;
        this._avatarElement = avatarElement;
    }

    getUserInfo() {
        this._userValues = {};
        this._userValues["nameInput"] = this._authorElement.textContent;
        this._userValues["infInput"] = this._jobElement.textContent;
        return this._userValues;
    }

    setUserInfo({ name, inf, avatar, _id }) {
        this._authorElement.textContent = name;
        this._jobElement.textContent = inf;
        this.changeProfileAvatar(avatar);
        this._id = _id;
    }

    changeProfileAvatar(avatar) {
        this._avatarElement.src = avatar;
    }
}