import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;
  // title! --> valeur undefined
  // ou title: string = 'crm' ou valeur dans un constructeur
  constructor(){
    this.title = 'crm';
  }

}
