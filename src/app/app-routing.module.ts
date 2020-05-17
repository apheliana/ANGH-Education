import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTypesComponent } from './data-types.component';
import { UsernameComponent } from './username.component';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  { path: "data-types", component: DataTypesComponent },
  { path: "username", component: UsernameComponent },
  { path: "operations", component: OperationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }