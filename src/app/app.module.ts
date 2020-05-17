import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubPageComponent } from './sub-page.component';
import { UsernameComponent } from './username.component';
import { OperationsComponent } from './operations.component';


@NgModule({
  declarations: [
    AppComponent,
    SubPageComponent,
    UsernameComponent,
    OperationsComponent
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