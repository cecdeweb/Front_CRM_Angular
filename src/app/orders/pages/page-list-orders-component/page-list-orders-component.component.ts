import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders-component',
  templateUrl: './page-list-orders-component.component.html',
  styleUrls: ['./page-list-orders-component.component.scss']
})
export class PageListOrdersComponentComponent implements OnInit {

  public title: string;

  constructor(private orderService: OrdersService) {

    this.title = "Liste des commandes"

    this.orderService.collection$.subscribe((data) => {
      console.log(data);
    });
   }

  ngOnInit(): void {
  }

  /**
   * method test change title on click button
   */
  public changeTitle(): void {

    this.title = 'le titre à changé';

  }

}
