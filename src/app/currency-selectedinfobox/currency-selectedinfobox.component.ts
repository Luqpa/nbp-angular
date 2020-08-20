import { Component, OnInit, Input  } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

//interfaces
import { SelectedCurrencRate } from '../interfaces/currency-singleitem';

@Component({
  selector: 'app-currency-selectedinfobox',
  templateUrl: './currency-selectedinfobox.component.html',
  styleUrls: ['./currency-selectedinfobox.component.css'],
  
})
export class CurrencySelectedinfoboxComponent implements OnInit {

  @Input('selectedCurrencyRate') receivedSelectedCurrencyRate: SelectedCurrencRate; 
  

  constructor() {}

  ngOnInit(): void {
  }

  

}
