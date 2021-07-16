import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Depense} from "../_model/depense";

const API_URL = 'http://localhost:8080/v2/beneficiaire/';
const API_URL2 = 'http://localhost:8080/v1/beneficiaire/';
const httpOptions = {  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})



export class BeneficiaireService {
  constructor(private http: HttpClient) { }

  getDepenses(): Observable<Array<Depense>> {
    return this.http.get<Array<Depense>>(API_URL + 'loggedin/depenses/');
  }
  getOrdonnateurs(): Observable<any> {
    return this.http.get<any>(API_URL2 , httpOptions);
  }
}
