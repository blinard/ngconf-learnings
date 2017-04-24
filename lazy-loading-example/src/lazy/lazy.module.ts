import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyRoutingModule } from "./lazy-routing.module";
import { LazilyLoadedComponent } from "./lazily-loaded/lazily-loaded.component";
import { AnotherLazyComponent } from "./another-lazy/another-lazy.component";

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazilyLoadedComponent, AnotherLazyComponent]
})
export class LazyModule { }
