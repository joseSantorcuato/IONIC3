import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {
estudiantes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dbFirebase: FirebaseDbProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
    this.dbFirebase.getEstudiantes().subscribe(estudiantes =>{
      this.estudiantes = estudiantes; })

  }
  muestraEstudiante(estudiante){

    let modalEstudiante = this.modalCtrl.create(
      'ModalDetalleEstudiantePage', estudiante);
      modalEstudiante.present();
  }

  borrarEstudiante(id){

   let alert = this.alertCtrl.create({
     title: 'Confirmar borrado',
     message: '¿Estás seguro de que deseas eliminar a este estudiante?',
     buttons: [
       {
         text: 'No',
         role: 'cancel',
         handler: () => {
           // Ha respondido que no así que no hacemos nada, cierra el modal lolito
         }
       },
       {
         text: 'Si',
         handler: () => {
              // AquÍ borramos el sitio en firebase
             this.dbFirebase.borrarEstudiante(id);
          }
       }
     ]
   });

   alert.present();

}
}
