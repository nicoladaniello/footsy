import AppUser from "./appUser";
import moment, { Moment } from "moment";

export default class AppMatch {
  id: string = null;
  address: any;
  description: string;
  eventDate: Moment;
  organiser: AppUser;
  price: number;
  teamSize: number;
  playersCount: number;
  recentPlayers: any;
  isPrivate: boolean;

  constructor(match) {
    Object.assign(this, match);
    this.organiser = new AppUser(this.organiser);
    this.eventDate = moment(this.eventDate);
  }

  get formattedPrice() {
    return `$${this.price / 100}`;
  }

  get playersLimit() {
    return this.teamSize * 2;
  }

  get spacesLeft() {
    return this.playersLimit - this.playersCount;
  }
}
