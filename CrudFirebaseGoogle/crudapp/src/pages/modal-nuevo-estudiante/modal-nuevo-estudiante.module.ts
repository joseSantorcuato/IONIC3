import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNuevoEstudiantePage } from './modal-nuevo-estudiante';

@NgModule({
  declarations: [
    ModalNuevoEstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNuevoEstudiantePage),
  ],
})
export class ModalNuevoEstudiantePageModule {}
