import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubPageComponent } from './sub-page.component';
import { SecondaryComponent } from './secondary.component';

const routes: Routes = [
  { path: "secondary", component: SecondaryComponent },
  { path: "subpage", component: SubPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }