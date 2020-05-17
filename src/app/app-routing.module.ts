import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubPageComponent } from './sub-page.component';
import { UsernameComponent } from './username.component';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  { path: "subpage", component: SubPageComponent },
  { path: "username", component: UsernameComponent },
  { path: "operations", component: OperationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }