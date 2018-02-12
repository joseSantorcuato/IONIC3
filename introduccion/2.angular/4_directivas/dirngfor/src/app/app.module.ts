import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EjdirngforComponent } from './ejdirngfor/ejdirngfor.component';


@NgModule({
  declarations: [
    AppComponent,
    EjdirngforComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
