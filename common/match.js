export class AppMatch {
  _id = null;

  constructor(match) {
    this.isValid(match);
    Object.assign(this, match);
  }

  get formattedPrice() {
    return `$${this.price / 100}`;
  }

  isValid(obj) {
    if (!obj.address) throw new Error("address must be specified in AppMatch!");
    if (!obj.price) throw new Error("price must be specified in AppMatch!");
    if (!obj.organiser)
      throw new Error("organiser must be specified in AppMatch!");
    if (!obj.teamSize)
      throw new Error("teamSize must be specified in AppMatch!");
    if (!obj.eventDate)
      throw new Error("eventDate must be specified in AppMatch!");
    if (!obj.private) throw new Error("private must be specified in AppMatch!");
  }
}
