import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageListOrdersComponentComponent } from './pages/page-list-orders-component/page-list-orders-component.component';
import { PageEditOrderComponentComponent } from './pages/page-edit-order-component/page-edit-order-component.component';
import { PageAddOrderComponentComponent } from './pages/page-add-order-component/page-add-order-component.component';


@NgModule({
  declarations: [
    PageListOrdersComponentComponent,
    PageEditOrderComponentComponent,
    PageAddOrderComponentComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
