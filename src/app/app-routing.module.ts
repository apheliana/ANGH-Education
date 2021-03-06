import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArraysComponent } from './arrays.component';
import { DataTypesComponent } from './data-types.component';
import { UsernameComponent } from './username.component';
import { OperationsComponent } from './operations.component';
import { FormPractiseComponent } from './form-practise.component';
import { APIPractiseComponent } from './api-practise.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [
  { path: "arrays", component: ArraysComponent },
  { path: "data-types", component: DataTypesComponent },
  { path: "username", component: UsernameComponent },
  { path: "operations", component: OperationsComponent },
  { path: "form-practise", component: FormPractiseComponent },
  { path: "api-practise", component: APIPractiseComponent },
  { path: "notes", component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }