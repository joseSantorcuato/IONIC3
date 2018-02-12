import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArrayobjetosComponent } from './arrayobjetos/arrayobjetos.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrayobjetosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
