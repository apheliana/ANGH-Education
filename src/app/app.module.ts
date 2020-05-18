import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTypesComponent } from './data-types.component';
import { UsernameComponent } from './username.component';
import { OperationsComponent } from './operations.component';
import { FormPractiseComponent } from './form-practise-hw.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTypesComponent,
    UsernameComponent,
    OperationsComponent,
    FormPractiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }