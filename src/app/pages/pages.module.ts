import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    FilterComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    FilterComponent,
    ProductsComponent
    
  ]
})
export class PagesModule { }
