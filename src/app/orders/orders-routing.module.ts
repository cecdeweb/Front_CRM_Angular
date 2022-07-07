import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponentComponent } from './pages/page-list-orders-component/page-list-orders-component.component';

const routes: Routes = [
  // afficher directement page list orders comme page par defaut orders
  { path: '', component: PageListOrdersComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
