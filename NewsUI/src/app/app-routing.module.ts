import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewListComponent } from './new-list/new-list.component';
import { NewDetailsComponent } from './new-details/new-details.component';

const routes: Routes = [
  { path: 'Contents', component: NewListComponent },
  { path: 'Contents/:p1', component: NewDetailsComponent },
  { path: '**', redirectTo: 'Contents', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
