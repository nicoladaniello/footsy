import AppUser from "./appUser";

export default class AppUserList {
  list = [];

  constructor(users) {
    if (!users) return;
    if (!Array.isArray(users))
      throw new Error("Applist must be initialized with an array!");
    this.list = users.map(u => new AppUser(u));
  }

  get length() {
    return this.list.length;
  }

  get formattedText() {
    if (!this.list || !this.list.length) return null;
    if (this.list.length === 1) return this.list[0].fullName;
    if (this.list.length === 2)
      return `${this.list[0].fullName} and ${this.list[1].fullName}`;
    if (this.list.length === 3)
      return `${this.list[0].name.first}, ${this.list[1].name.first} and ${
        this.list[2].name.first
      }`;
    if (this.list.length > 3)
      return `${this.list[0].name.first}, ${this.list[1].name.first} and ${this
        .list.length - 2} others`;
  }
}
