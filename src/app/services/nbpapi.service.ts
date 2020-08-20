import { Injectable } from '@angular/core';

/*
* You can then inject the HttpClient service as a dependency of an application class
*/
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

/*
*The HttpClient service makes use of observables for all transactions. 
* You must import the RxJS observable and operator symbols that appear in the example snippets. 
* These ConfigService imports are typical.
*/
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


/*
* Interfaces
*/

import { NbpApiConfig } from '../interfaces/nbpapi-config';
import { CurrencySet, SingleCurrencyItem, QueryParams } from '../interfaces/currency-singleitem';


@Injectable({
  providedIn: 'root'
})

export class NbpapiService {

	configUrl = 'assets/nbpapi.json';
	queryParams:QueryParams;

  	constructor(private http: HttpClient) {}

  	
  	getConfig(){
  		console.log('in getConfig - service');

  		return this.http.get<NbpApiConfig>(this.configUrl); //
  	}

  	getData(queryParams){
  		console.log('in get data');
  		console.log(queryParams);

  		const urlNbpQuery = `http://api.nbp.pl/api/exchangerates/rates/${queryParams.table}/${queryParams.currency}/last/${queryParams.timespan}/`;
  		const options = 
  			{ 
  				params: new HttpParams().set('format', 'json') 
  			};
  		return this.http.get<any>(urlNbpQuery,options)
  		/*
  		return this.http.get<any>(urlNbpQuery,options).pipe(
  			catchError(this.handleError)
  		); */
  	}
  	
}
