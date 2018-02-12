import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';



import { AppComponent } from './app.component';
import { EjngifComponent } from './ejngif/ejngif.component';


@NgModule({
  declarations: [
    AppComponent,
    EjngifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
