import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazilyLoadedComponent } from './lazily-loaded/lazily-loaded.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazilyLoadedComponent]
})
export class LazyModule { }
