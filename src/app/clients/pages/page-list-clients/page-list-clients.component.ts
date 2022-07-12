import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title: string;
  //public btnLabel: string;
  public collection$!: Observable<Client[]>;
  public headers: string[];
  public states = Object.values(StateClient);

  constructor(private clientsService: ClientsService) {
    this.title = 'Liste des clients';
    //this.btnLabel = 'Ajouter un client';
    this.collection$ = this.clientsService.collection$;
    this.headers = ['Entreprise', 'Prénom', 'Nom', 'Email', 'Telephone', 'Adresse', 'Code Postal', 'Ville', 'Pays', 'Statut', 'Id'];

  }

  ngOnInit(): void {}

  public changeState(item: Client, event: any): void{
    const state = event.target.value;
    this.clientsService.changeState(item, state).subscribe((data) => Object.assign(item, data));
  }

}
