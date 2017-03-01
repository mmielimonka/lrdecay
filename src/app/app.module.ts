import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';

import {AppComponent} from './app.component';
import {PolynomialComponentComponent} from './polynomial-component/polynomial-component.component';
import {MaterialModule} from "@angular/material";
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    PolynomialComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
