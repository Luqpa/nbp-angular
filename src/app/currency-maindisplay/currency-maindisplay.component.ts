import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
* Interfaces
*/
import { NbpApiConfig } from '../interfaces/nbpapi-config';
import { CurrencySet, SingleCurrencyItem, QueryParams, SelectedCurrencRate, QueryError } from '../interfaces/currency-singleitem';


/*
* Services
*/
import { NbpapiService } from '../services/nbpapi.service';



/*
* tmp data
*/
const ELEMENT_DATA: SingleCurrencyItem[] = [
  {position: 1, no: '128/A/NBP/2020', effectiveDate: "2020-07-03", mid: 3.9764},
  {position: 2, no: '129/A/NBP/2020', effectiveDate: "2020-07-04", mid: 3.3764},
  {position: 3, no: '130/A/NBP/2020', effectiveDate: "2020-07-05", mid: 3.4764},
];



@Component({
  selector: 'app-currency-maindisplay',
  templateUrl: './currency-maindisplay.component.html',
  styleUrls: ['./currency-maindisplay.component.css']
})

export class CurrencyMaindisplayComponent implements OnInit {

  	//nbpapiservice: NbpapiService;
  	
  	config:NbpApiConfig;
  	data:NbpApiConfig;

  	queryparams:QueryParams;

  	//table setup
  	//dataSource = ELEMENT_DATA;

  	displayedColumns: string[] = ['position','no','effectivedate','mid'];
  	isCurrencySetLoaded: boolean;
  	dataSourceQuereriedSet:CurrencySet;
  	dataSourceCurrencyItems:SingleCurrencyItem[];
  	dataComputedAverageRate:any;
  	isRowSelected:boolean = false;
  	selectedRowData:any;

  	selectedCurrencyRate: SelectedCurrencRate;
  	receivedSelectedCurrencyRate:SelectedCurrencRate;

  	isQueryError:boolean = false;
  	queryError:QueryError = {
  		"error": '',
		"message": '',
		"name": '',
		"statustext": '',
		"url": ''
  	};

  	//selectedCurrencyInfo:any; //object ref to bind send to infopanelbox

	constructor(private nbpapiservice: NbpapiService) {
		/*
		* Popullated from query
		*/
		this.dataSourceQuereriedSet = 
		{
			"code": "",
			"currency": "",
			"rates": [],
			"table": ""
		}
		
		/*
		* Popullated clicking in table row
		* CurrencyInfo part -> popullated when currency change
		*/
		this.selectedCurrencyRate = 
		{
			name: '',
			shortname: '',
			iconpath: '',
			bgcountryimagepath:'',
  			currency: '',
  			position: '',
  			table: '',
  			effdate: '',
  			rate: '',
  			isrowselected: this.isRowSelected
  			
		}

		
		console.log('main display - constructor');
		console.log(this.selectedCurrencyRate);
		
	}

  	ngOnInit(): void {
  		console.log('config module - on init');

  		//this.config.heroesUrl = 'test';
		//this.config.textfile = 'test';


  		console.log(this.nbpapiservice);
  		console.log(this.config);
  		//this.showConfig();
  		this.queryparams = {
  			"currency": 'usd',
  			"timespan": 30,
  			"table": 'A'
  		};
  		this.receiveData(this.queryparams);
  	}

  	/*
  	* Highlight the selected row and remove other highlights
  	* highlight class: tableRowSelected
  	* update var or propery for indicating selection of the row
  	*
  	*/
  	onTableRowClick($event,cssClassTableRef): void {
  		let nodeTarget = event.target as HTMLElement;

  		const refTableRows = `.${cssClassTableRef} tr`;
  		let nodesTableRows = document.querySelectorAll(refTableRows);

  		/*remove possible highlights*/
  		for(let a=0;a<=nodesTableRows.length-1;a++){
  			nodesTableRows[a].classList.remove('tableRowSelected');
  		}

  		//crawl to the row 
  		let nodeCurrentlyCrawled = nodeTarget as HTMLElement;
  		let strNodeName = nodeCurrentlyCrawled.nodeName;

  		let i = 0;
  		do {

  			nodeCurrentlyCrawled = nodeCurrentlyCrawled.parentNode as HTMLElement;
  			strNodeName = nodeCurrentlyCrawled.nodeName;

  			//guard for infinite loop - base - dom crawl up not more than 10
  			if (i >= 10){ break; }
  			i++;
  		} while (strNodeName != 'TR')

  		//current row assigment - node
  		let nodeTargetRow = nodeCurrentlyCrawled as HTMLElement;

  		//checking if the same row is clicked
  		if (this.selectedCurrencyRate.position == nodeTargetRow.childNodes[0].textContent)
  		{ //unselecting the row !!!!
  			
  			/*highlight current row with class*/
	  		nodeTargetRow.classList.remove('tableRowSelected');

  			//marking that the row is selected
	  		this.isRowSelected = false;
	  		this.selectedCurrencyRate.isrowselected = false;

	  		this.selectedCurrencyRate.position = '';
	  		this.selectedCurrencyRate.table = '';
			this.selectedCurrencyRate.effdate = '';
	  		this.selectedCurrencyRate.rate = '';

  		} else {
  			/*highlight current row with class*/
	  		nodeTargetRow.classList.add('tableRowSelected');

	  		
	  		//marking that the row is selected
	  		this.isRowSelected = true;
	  		this.selectedCurrencyRate.isrowselected = true;

	  		//attaching data to object to send to child to boxInfo etc ...
	  		// children nodes -> 0)position 1)table 2)eff date 3) rate 
	  		console.log(nodeTargetRow);

	  		this.selectedCurrencyRate.position = nodeTargetRow.childNodes[0].textContent;
	  		this.selectedCurrencyRate.table = nodeTargetRow.childNodes[1].textContent;
			this.selectedCurrencyRate.effdate = nodeTargetRow.childNodes[2].textContent;
	  		this.selectedCurrencyRate.rate = nodeTargetRow.childNodes[3].textContent;
  		}

  	} //end of onTableRowClick


  	/*
  	* 
  	* 
  	*/
  	onQueryRequestSelectedCurrencyInfo(data:any): void {
  		console.log('ssssss - currency selected');
  		console.log(data);

  		//this.selectedCurrencyRate.name = data.name;
  		//this.selectedCurrencyRate.shortname = data.shortname;
  	}

  	/*
  	* Responding to emit from: currencyqury-optionspanel
  	* Button - query clicked
  	*/
  	onQueryRequest(queryparams:any): void {
  		console.log('in onQueryRequest');
  		console.log(queryparams);

  		this.queryparams = {
  			"currency": queryparams.currency,
  			"timespan": queryparams.timespan,
  			"table": queryparams.table
  		};

  		this.receiveData(this.queryparams);
  	}

  	receiveData(queryparams:QueryParams): void{
  		console.log('in receiveData');
  		console.log(queryparams);

		this.nbpapiservice.getData(queryparams)
	    	// clone the data object, using its known Config shape
	    	.subscribe( 
	    		(dataSourceQuereriedSet) => {
	    		console.log('in subscribe');
	    		console.log(dataSourceQuereriedSet);

	    		//this.dataSourceQuereriedSet = JSON.parse(data);

	    		/*
	    		* Receving data
	    		* calc the average
	    		*/

	    		if (dataSourceQuereriedSet.rates.length > 0){


	    			//assign currency info to bound vars
	    			this.selectedCurrencyRate.name = dataSourceQuereriedSet.currency;
  					this.selectedCurrencyRate.shortname = dataSourceQuereriedSet.code;
  					//asign image icon path based on shortname currency
  					this.selectedCurrencyRate.iconpath = 'assets/images/currencies/'+ dataSourceQuereriedSet.code.toLowerCase()+'.png';
  					//assign country background image path
  					this.selectedCurrencyRate.bgcountryimagepath = 'assets/images/flags/'+ dataSourceQuereriedSet.code.toLowerCase()+'.png';

	    			//calc average
	    			this.dataComputedAverageRate = 0;
	    			(dataSourceQuereriedSet.rates).forEach((el)=>{
	    				this.dataComputedAverageRate += el.mid;
	    			});
	    			this.dataComputedAverageRate = (this.dataComputedAverageRate / parseInt(dataSourceQuereriedSet.rates.length)).toFixed(4);

	    			//attach rated to bound array
	    			this.dataSourceQuereriedSet.rates = dataSourceQuereriedSet.rates;
		    		console.log('queried');
		    		console.log(this.dataSourceQuereriedSet);

		    		this.isCurrencySetLoaded = true;

		    		//notification no errors
		    		this.isQueryError = false;
	    		}


	    		
	    		},
		    	(error)=>{
		    		console.log('error....');
		    		console.log(error);

		    		//notification query error
		    		this.isQueryError = true;

		    		//attaching error data to pass to notification boxInfo
		    		this.queryError.error = error.error;
		    		this.queryError.message = error.message;
		    		this.queryError.name = error.name;
		    		this.queryError.statustext = error.statusText;
		    		this.queryError.url = error.url;
		    		
		    	}
	    	);
	}

  	showConfig() {
  		console.log('in showConfig');
		this.nbpapiservice.getConfig()
	    	// clone the data object, using its known Config shape
	    	.subscribe( 
		    	(data: NbpApiConfig) => {
		    		console.log('in subscribe');
		    		console.log(data);


		    	}

	    	);
	    console.log(this.config);
	    console.log(this.data);
	}

	

}
