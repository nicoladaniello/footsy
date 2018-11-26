import AppUser from "./appUser";

export default class AppMatch {
  _id = null;

  constructor(match) {
    this.isValid(match);
    Object.assign(this, match);
    this.organiser = new AppUser(this.organiser);
  }

  get formattedPrice() {
    return `$${this.price / 100}`;
  }

  get totalNumberOfPlayers() {
    return this.teamSize * 2;
  }

  get numberOfPartecipants() {
    return this.players.length;
  }

  get spacesLeft() {
    return this.totalNumberOfPlayers - this.numberOfJoins;
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
    if (typeof obj.isPrivate === "undefined")
      throw new Error("isPrivate must be specified in AppMatch!");
    if (!obj.players) throw new Error("players must be specified in AppMatch!");
  }
}
