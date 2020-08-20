import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup,  FormBuilder,  Validators } from '@angular/forms';

/*interfraces*/
import { DefinitionCurrency, DefinitionCurrencyTable } from '../interfaces/currency-singleitem';

/*
* tmp data for select - currencies
*/
const AvailableCurrencies: DefinitionCurrency[] = [
  {id: 1, name: 'American Dollar', shortname: "USD", refnbpname:'usd'},
  {id: 2, name: 'Euro', shortname: "EUR", refnbpname:'eur'},
  {id: 4, name: 'Czech Koruna', shortname: "CZK", refnbpname:'czk'},
  {id: 4, name: 'Danish Kron', shortname: "DKK", refnbpname:'dkk'},
  {id: 5, name: 'Pound Sterling', shortname: "GBP", refnbpname:'gbp'},
  {id: 6, name: 'Canadian Dollar', shortname: "CAD", refnbpname:'cad'},
];

/*
* tmp for select - tables
*/
const AvailableCurrencyTables: DefinitionCurrencyTable[] = [
  {id:1,name:'A'},
  {id:2,name:'B'},
  {id:3,name:'C'}
];

@Component({
  selector: 'app-currencyquery-optionspanel',
  templateUrl: './currencyquery-optionspanel.component.html',
  styleUrls: ['./currencyquery-optionspanel.component.css']
})
export class CurrencyqueryOptionspanelComponent implements OnInit {
  @Output() currencyqueryrequest = new EventEmitter<any>();
  @Output() currencyqueryrequestselectedcurrencyinfo = new EventEmitter<any>();


  

  selectDataSource = AvailableCurrencies;
  selectTableDataSource = AvailableCurrencyTables;
  queryOptionsSelected: any; //TBD make interface ...
  

  constructor() {
    /*init of the query options, set default values*/
    this.queryOptionsSelected =  {
      "currency": "usd",
      "timespan":  new FormControl('30',
        [
          Validators.required,
          Validators.max(30), 
          Validators.min(1)
        ]
      ),
      "table": 'A'
    };

    
  
  }

  ngOnInit(): void {}

  /*query button clicked*/
  queryIssued($event): void {
    console.log('query button clicked');
    console.log(event);

    //gathering query params
    let objQueryParams = {
      'currency': this.queryOptionsSelected.currency,
      'timespan': this.queryOptionsSelected.timespan.value,
      'table': this.queryOptionsSelected.table
    }


    //finding the data regarding currency selected
    let objCurrencyInfo = this.selectDataSource.filter(obj => { //returns array ....
      return obj.refnbpname === objQueryParams.currency;
    });

    console.log('aaaaa---------');
    console.log(objCurrencyInfo);

    this.currencyqueryrequestselectedcurrencyinfo.emit(objCurrencyInfo[0]);
    this.currencyqueryrequest.emit(objQueryParams);
  }

}
