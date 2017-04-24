import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EagerComponent } from "./eager/eager.component";

const routes: Routes = [
  { path: "", redirectTo: "eager", pathMatch: "full" },
  { path: "eager", component: EagerComponent },
  { path: "lazy", loadChildren: "lazy/lazy.module#LazyModule" }
];

/*
  Important Notes for Lazy Loading:

  1. Use the Route 'loadChildren' property instead of 'component'
  2. Pass a string to 'loadChildren' instead of a Type/Symbol
  3. Include BOTH the path to the module AND the module class name in 'loadChildren'
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
