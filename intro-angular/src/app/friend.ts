export class Friend {
  private _firstName: string;
  private _lastname: string;
  private _email: string;
  private _phoneNumber: string;
  private _language: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    language: string
  ) {
    this._firstName = firstName;
    this._lastname = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._language = language;
  }
}
