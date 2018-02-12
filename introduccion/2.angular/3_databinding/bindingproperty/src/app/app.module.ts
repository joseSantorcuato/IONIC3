import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EjpropertyComponent } from './ejproperty/ejproperty.component';


@NgModule({
  declarations: [
    AppComponent,
    EjpropertyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
