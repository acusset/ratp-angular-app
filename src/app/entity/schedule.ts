export class Schedule {
  private _message;
  private _destination;

  constructor(message, destination) {
    this._message = message;
    this._destination = destination;
  }

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
  }

  get destination() {
    return this._destination;
  }

  set destination(value) {
    this._destination = value;
  }
}
