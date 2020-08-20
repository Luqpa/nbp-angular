import { Component, OnInit, Input } from '@angular/core';

/*
* Interfaces
*/

import { QueryError } from '../interfaces/currency-singleitem';



@Component({
  selector: 'app-currency-querynotificationbox',
  templateUrl: './currency-querynotificationbox.component.html',
  styleUrls: ['./currency-querynotificationbox.component.css']
})
export class CurrencyQuerynotificationboxComponent implements OnInit {
  @Input() passedQueryError: QueryError;

  constructor() { }

  ngOnInit(): void {
  }

}
