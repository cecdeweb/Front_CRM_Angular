import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders-component',
  templateUrl: './page-list-orders-component.component.html',
  styleUrls: ['./page-list-orders-component.component.scss'],
})
export class PageListOrdersComponentComponent implements OnInit {
  public title: string;
  //public btnLabel: string;
  public headers: string[];
  public collection$: Observable<Order[]>;
  public states: string[];

  constructor(private orderService: OrdersService) {
    this.title = 'Liste des commandes';
    //this.btnLabel = 'Ajouter une commande';
    this.headers = [ 'Type', 'Désignation', 'Nr jours', 'TJM', 'Total', 'Statut', ];
    this.collection$ = this.orderService.collection$;
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {}

  /**
   * method test change title on click button
   */
  public changeTitle(): void {
    this.title = 'le titre à changé';
  }

  /**
   * changeState
   */
  public changeState(item: Order, event: any) {
    const state = event.target.value;
    this.orderService.changeState(item, state).subscribe((data) => Object.assign(item, data));
  }

}
