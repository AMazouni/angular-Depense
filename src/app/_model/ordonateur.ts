export class Ordonateur {
   private _code : Number;
   private _login :String;
   private _intitule :String;
   private _categorie :String;
   private _droit :String;

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

  get categorie(): String {
    return this._categorie;
  }

  set categorie(value: String) {
    this._categorie = value;
  }

  get droit(): String {
    return this._droit;
  }

  set droit(value: String) {
    this._droit = value;
  }

  constructor(code: Number, login: String, intitule: String, categorie: String, droit: String) {
    this._code = code;
    this._login = login;
    this._intitule = intitule;
    this._categorie = categorie;
    this._droit = droit;
  }
}
