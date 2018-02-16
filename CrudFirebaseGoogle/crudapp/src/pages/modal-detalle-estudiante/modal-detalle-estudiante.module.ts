import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetalleEstudiantePage } from './modal-detalle-estudiante';

@NgModule({
  declarations: [
    ModalDetalleEstudiantePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetalleEstudiantePage),
  ],
})
export class ModalDetalleEstudiantePageModule {}
