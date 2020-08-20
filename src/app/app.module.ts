import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
* Import for HTTP communication
*/

import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaindisplayComponent } from './currency-maindisplay/currency-maindisplay.component';
import { CurrencySelectionButtonsComponent } from './currency-selection-buttons/currency-selection-buttons.component';
import { CurrencyqueryOptionspanelComponent } from './currencyquery-optionspanel/currencyquery-optionspanel.component';

/*
* *Reactive Forms
*/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/*
* Material required imports
*/ 
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CurrencySelectedinfoboxComponent } from './currency-selectedinfobox/currency-selectedinfobox.component';
import { CurrencyQuerynotificationboxComponent } from './currency-querynotificationbox/currency-querynotificationbox.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyMaindisplayComponent,
    CurrencySelectionButtonsComponent,
    CurrencyqueryOptionspanelComponent,
    CurrencySelectedinfoboxComponent,
    CurrencyQuerynotificationboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import HttpClientModule after BrowserModule.
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  //reactive forms
    ReactiveFormsModule,
    MatButtonModule, //matrial elements
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
