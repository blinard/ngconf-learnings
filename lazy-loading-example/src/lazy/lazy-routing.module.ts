import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LazilyLoadedComponent } from "./lazily-loaded/lazily-loaded.component";
import { AnotherLazyComponent } from "./another-lazy/another-lazy.component";

const routes: Routes = [
  { path: "", component: LazilyLoadedComponent },
  { path: "another", component: AnotherLazyComponent }
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
