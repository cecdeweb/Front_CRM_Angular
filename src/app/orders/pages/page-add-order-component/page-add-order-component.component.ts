import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order-component',
  templateUrl: './page-add-order-component.component.html',
  styleUrls: ['./page-add-order-component.component.scss'],
})
export class PageAddOrderComponentComponent implements OnInit {
  public title: string;
  public btnLabel: string;
  public item: Order;

  constructor(private ordersService: OrdersService, private router: Router) {
        this.title = 'Ajouter une commande';
        this.btnLabel = 'Liste des commandes';
        this.item = new Order();

  }

  ngOnInit(): void {}

  public action(item: Order): void{
    this.ordersService.add(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }

}
