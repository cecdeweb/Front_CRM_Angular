import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders-component',
  templateUrl: './page-list-orders-component.component.html',
  styleUrls: ['./page-list-orders-component.component.scss'],
})
export class PageListOrdersComponentComponent implements OnInit {
  public title: string;
  public btnLabel: string;
  public headers: string[];
  public collection!: Order[];

  constructor(private orderService: OrdersService) {
    this.title = 'Liste des commandes';
    this.btnLabel = 'Ajouter une commande';
    this.headers = [
      'Type',
      'Désignation',
      'Nr jours',
      'TJM',
      'Total',
      'Statut',
    ];

    this.orderService.collection$.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  /**
   * method test change title on click button
   */
  public changeTitle(): void {
    this.title = 'le titre à changé';
  }
}
