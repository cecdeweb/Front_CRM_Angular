import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  public collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) {
    console.log('service clients instanced');
    this.collection$ = this.httpClient.get<Client[]>(`${this.urlApi}/clients`);
  }

  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({ ...item });
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }
}
