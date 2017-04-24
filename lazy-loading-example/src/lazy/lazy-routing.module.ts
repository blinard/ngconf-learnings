import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazilyLoadedComponent } from './lazily-loaded/lazily-loaded.component';

const routes: Routes = [
  { path: '', component: LazilyLoadedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }

/*
  Important Note:

  1. The lazy-loaded routing module must use RouterModule.forChild(...) to publish its routes (not .forRoot).
*/