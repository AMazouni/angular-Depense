export class User {

  private _login: String;
  private _password: String;

  get login(): String {
    return this._login;
  }

  set login(value: String) {
    this._login = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  constructor(login: String, password: String) {
    this._login = login;
    this._password = password;
  }
}
