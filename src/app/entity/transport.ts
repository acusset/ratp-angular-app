export abstract class Transport {

  private _type: string;
  private _code: number;
  private _name: string;
  private _directions: string;
  private _id: number;

  constructor(code: number, name: string, directions: string, id: number, type: string) {
    this._code = code;
    this._name = name;
    this._directions = directions;
    this._id = id;
    this._type = type;
  }

  get type(): string {
    return this._type;
  }

  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get directions(): string {
    return this._directions;
  }

  set directions(value: string) {
    this._directions = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
