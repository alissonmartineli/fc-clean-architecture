import Notification from "../notification/notification";
export default abstract class Entity {
  protected _id: string;
  public notification: Notification;

  constructor(_id: string) {
    this._id = _id;
    this.notification = new Notification();
  }

  get id(): string {
    return this._id;
  }
}
