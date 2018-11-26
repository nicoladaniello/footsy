export default class AppUser {
  _id = null;

  constructor(user) {
    this.isValid(user);
    Object.assign(this, user);
  }

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  isValid(obj) {
    if (!obj.name) throw new Error("name must be specified in AppUser!");
  }
}
