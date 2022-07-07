import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  //charger CoreModule avant AppRoutingModule pour importer toutes les routes avant le chargement des modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
