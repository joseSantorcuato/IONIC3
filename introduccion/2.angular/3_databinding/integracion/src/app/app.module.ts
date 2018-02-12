import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EventosComponent } from './eventos/eventos.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewmodeloComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
