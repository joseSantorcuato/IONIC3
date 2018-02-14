import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';



/**
 * Generated class for the ModalNuevoSitioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-nuevo-estudiante',
  templateUrl: 'modal-nuevo-estudiante.html',
})
export class ModalNuevoEstudiantePage {

nombre: string;
apat:string;
amat: string;
profe:string;
foto:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private camera: Camera, private dbFirebase: FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoSitioPage');


  }
  cerrarModal(){
      this.viewCtrl.dismiss();

  }

  sacarFoto(){

    let cameraOptions : CameraOptions = {
    quality: 50,
    encodingType: this.camera.EncodingType.JPEG,
     targetWidth: 800,
     targetHeight: 600,
     destinationType: this.camera.DestinationType.DATA_URL,
     sourceType: this.camera.PictureSourceType.CAMERA,
     correctOrientation: true }

     this.camera.getPicture(cameraOptions).then((imageData)=>{ // imageData is a base64 encoded string
     this.foto = "data:image/jpeg;base64,"+imageData;
     //alert("saqué la foto");
     }, (err)=>{
     console.log( err); });


  }

guardarEstudiante(){
 let estudiante = {

 nombre: this.nombre,
 apat: this.apat,
 amat: this.amat,
 profe: this.profe,

 foto: this.foto

}
this.dbFirebase.addEstudiante(estudiante).then(res =>{
  console.log('Sitio guardado en firebase:');
  this.cerrarModal();


    alert('se ha introducido correctamente en la bd');
   },(err)=>{alert('error al meter en la bd'+err)})







}

}
