import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponentComponent } from './pages/page-add-order-component/page-add-order-component.component';
import { PageEditOrderComponentComponent } from './pages/page-edit-order-component/page-edit-order-component.component';
import { PageListOrdersComponentComponent } from './pages/page-list-orders-component/page-list-orders-component.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponentComponent },
  { path: 'add', component: PageAddOrderComponentComponent },
  { path: 'edit', component: PageEditOrderComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
