export class Beneficiaire {

   private _code: Number;
   private _login : String;
   private _intitule : String;
   private _coordonnee : String;

  constructor(code: Number, login: String, intitule: String, coordonnee: String) {
    this._code = code;
    this._login = login;
    this._intitule = intitule;
    this._coordonnee = coordonnee;
  }

  get code(): Number {
    return this._code;
  }

  set code(value: Number) {
    this._code = value;
  }

  get login(): String {
    return this._login;
  }

  set login(value: String) {
    this._login = value;
  }

  get intitule(): String {
    return this._intitule;
  }

  set intitule(value: String) {
    this._intitule = value;
  }

  get coordonnee(): String {
    return this._coordonnee;
  }

  set coordonnee(value: String) {
    this._coordonnee = value;
  }
}
