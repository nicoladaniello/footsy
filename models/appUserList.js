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
}
