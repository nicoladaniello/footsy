export default class AppUser {
  id = null;

  constructor(user) {
    this.isValid(user);
    Object.assign(this, user);
    this.friends = user.friends ? user.friends.map(f => AppUser(f)) : [];
  }

  isValid(obj) {
    if (!obj.name) throw new Error("name must be specified in AppUser!");
  }
}
