import {Beneficiaire} from "./beneficiaire";
import {Ordonateur} from "./ordonateur";

export class Depense {

   private _numero : Number;
   private _date : Date;
   private _montant : Number;
   private _acceptee : boolean;
   private _beneficiaire : Beneficiaire;
   private _ordonnateur : Ordonateur;


  get beneficiaire(): Beneficiaire {
    return this._beneficiaire;
  }

  set beneficiaire(value: Beneficiaire) {
    this._beneficiaire = value;
  }

  get ordonnateur(): Ordonateur {
    return this._ordonnateur;
  }

  set ordonnateur(value: Ordonateur) {
    this._ordonnateur = value;
  }

  get numero(): Number {
    return this._numero;
  }

  set numero(value: Number) {
    this._numero = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get montant(): Number {
    return this._montant;
  }

  set montant(value: Number) {
    this._montant = value;
  }

  get acceptee(): boolean {
    return this._acceptee;
  }

  set acceptee(value: boolean) {
    this._acceptee = value;
  }


  constructor(numero: Number, date: Date, montant: Number, acceptee: boolean, beneficiaire: Beneficiaire, ordonnateur: Ordonateur) {
    this._numero = numero;
    this._date = date;
    this._montant = montant;
    this._acceptee = acceptee;
    this._beneficiaire = beneficiaire;
    this._ordonnateur = ordonnateur;
  }
}
