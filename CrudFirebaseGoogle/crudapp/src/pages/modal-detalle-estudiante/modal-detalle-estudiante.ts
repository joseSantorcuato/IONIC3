import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AutenticaProvider } from '../../providers/autentica/autentica';

/**
 * Generated class for the ModalDetalleEstudiantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-detalle-estudiante',
  templateUrl: 'modal-detalle-estudiante.html',
})
export class ModalDetalleEstudiantePage {
estudiante: any;
foto: any;
edit : boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private camera: Camera, private dbFirebase :FirebaseDbProvider, private alertCtrl: AlertController) {
  this.estudiante = this.navParams.data  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDetalleEstudiantePage');
  }
  cerrarModal(){
      this.viewCtrl.dismiss();

  }
  editar(){
   this.edit = true;
 }

 sacarFoto(){

   let cameraOptions : CameraOptions = {
       quality: 50,
       encodingType: this.camera.EncodingType.JPEG,
       targetWidth: 800,
       targetHeight: 600,
       destinationType: this.camera.DestinationType.DATA_URL,
       sourceType: this.camera.PictureSourceType.CAMERA,
       correctOrientation: true
   }


   this.camera.getPicture(cameraOptions).then((imageData) => {
     // imageData is a base64 encoded string
       this.estudiante.foto = "data:image/jpeg;base64," + imageData;
   }, (err) => {
       console.log(err);
   });
 }




  guardarCambios(){

    let estudiante = {
    id: this.estudiante.id,
    nombre: this.estudiante.nombre,
    apat: this.estudiante.apat,
    amat: this.estudiante.amat,
    profe: this.estudiante.profe,

    foto: this.estudiante.foto

   }

    this.dbFirebase.modificaEstudiante(estudiante).then(res=>{
        console.log('Sitio modificado en firebase');
        this.cerrarModal();
    })
   }

   

}
