import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArraysComponent } from './arrays.component';
import { DataTypesComponent } from './data-types.component';
import { UsernameComponent } from './username.component';
import { OperationsComponent } from './operations.component';
import { FormPractiseComponent } from './form-practise.component';
import { APIPractiseComponent } from './api-practise.component';

@NgModule({
  declarations: [
    AppComponent,
    ArraysComponent,
    DataTypesComponent,
    UsernameComponent,
    OperationsComponent,
    FormPractiseComponent,
    APIPractiseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }