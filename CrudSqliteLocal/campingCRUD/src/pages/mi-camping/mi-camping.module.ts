import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiCampingPage } from './mi-camping';

@NgModule({
  declarations: [
    MiCampingPage,
  ],
  imports: [
    IonicPageModule.forChild(MiCampingPage),
  ],
})
export class MiCampingPageModule {}
