import { Component, OnInit } from '@angular/core';
import {OrdonnateurService} from "../_services/ordonnateur.service";
import {BeneficiaireService} from "../_services/beneficiaire.service";

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.css']
})
export class BeneficiaireComponent  {
/*
  // @ts-ignore
  private _gridApi;
  // @ts-ignore
  private _gridColumnApi;

  // @ts-ignore
  private _columnDefs;
  // @ts-ignore
  private _defaultColDef;
  // @ts-ignore
  private _defaultColGroupDef;
  // @ts-ignore
  private _columnTypes;
  // @ts-ignore
  private _rowData: Array<any>= new Array<any>();



  get gridApi() {
    return this._gridApi;
  }

  set gridApi(value) {
    this._gridApi = value;
  }

  get gridColumnApi() {
    return this._gridColumnApi;
  }

  set gridColumnApi(value) {
    this._gridColumnApi = value;
  }

  get columnDefs() {
    return this._columnDefs;
  }

  set columnDefs(value) {
    this._columnDefs = value;
  }

  get defaultColDef() {
    return this._defaultColDef;
  }

  set defaultColDef(value) {
    this._defaultColDef = value;
  }

  get defaultColGroupDef() {
    return this._defaultColGroupDef;
  }

  set defaultColGroupDef(value) {
    this._defaultColGroupDef = value;
  }

  get columnTypes() {
    return this._columnTypes;
  }

  set columnTypes(value) {
    this._columnTypes = value;
  }


  get rowData(): Array<any> {
    return this._rowData;
  }

  set rowData(value: Array<any>) {
    this._rowData = value;
  }
*/
  constructor(private ordService: BeneficiaireService) { }
/*
    this._columnDefs = [
      { headerName: 'Numéro',field: 'numero', sortable: true, filter: true, type: 'nonEditableColumn'},
      { headerName: 'Date fin',field: 'date',sortable: true, type: ['dateColumn', 'nonEditableColumn'] },
      { headerName: 'Montant', field: 'montant',sortable: true, type: ['numberColumn','nonEditableColumn']},
      { headerName: 'Beneficiaire', field: 'beneficiaire.intitule',sortable: true, type: 'nonEditableColumn'},
      { headerName: 'Validé', field: 'acceptee',sortable: true, filter: true}

    ]


    this._defaultColDef = {

      editable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    };
    this._defaultColGroupDef = { marryChildren: true };
    this._columnTypes = {
      numberColumn: {
        width: 200,
        filter: 'agNumberColumnFilter',
      },
      medalColumn: {
        width: 100,
        columnGroupShow: 'open',
        filter: false,
      },
      nonEditableColumn: { editable: false },
      dateColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function (filterLocalDateAtMidnight: Date, cellValue: string) {
            var dateParts = cellValue.split('-');
            var day = Number(dateParts[2]);
            var month = Number(dateParts[1]) - 1;
            var year = Number(dateParts[0]);
            var cellDate = new Date(year, month, day);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          },
        },
      },
    };*/    /*

}








  data : Array<any> = [];


  ngOnInit() : void {
    /*this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
  /*

    this.ordService.getDepenses().subscribe(e=>{
      this.data= e;
    })


  }


  // @ts-ignore
  onGridReady(params) {
    this._gridApi = params.api;
    this._gridColumnApi = params.columnApi;
    this.ordService.getDepenses().subscribe((data)=> this.rowData=data);


  }*/
}
