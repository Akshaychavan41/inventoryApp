import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvertoryListComponent } from './invertory-list/invertory-list.component';

const routes: Routes = [
 {path: '', component : InvertoryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
