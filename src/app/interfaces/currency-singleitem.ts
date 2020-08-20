/*
* Data for selected 
* Data for selected currency
*/
export interface SelectedCurrencRate {
	name:string;
	shortname:string;
	iconpath:string;
	bgcountryimagepath:string;
  	currency:string;
  	position: string;
  	table:string;
  	effdate:string;
  	rate: string;
  	isrowselected:boolean;
}

/*
* Query params for making the query to nbp
* Sent from Options Panel
*/ 
export interface QueryParams {
	currency: string;
	timespan: number;
	table:string;
}

/*
* Query error - notification box
*
*/

export interface QueryError {
	error: string;
	message: string;
	name: string;
	statustext: string;
	url:string;
}


export interface DefinitionCurrencyTable {
	id:number;
	name:string;
}

export interface DefinitionCurrency {
	id: number;
	name: string;
	shortname:string;
	refnbpname: string;
}

export interface CurrencySet {
  code: string;
  currency:string;
  rates: [];
  table:string
}

export interface SingleCurrencyItem {
	position:number;
	no:string;
	effectiveDate: string;
	mid:number;
}