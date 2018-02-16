import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DbProvider } from '../../providers/db/db';

declare var google: any;

/**
 * Generated class for the ModalNuevoSitioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-nuevo-sitio',
  templateUrl: 'modal-nuevo-sitio.html',
})
export class ModalNuevoSitioPage {
coords : any = {lat: 0, lng:0 }
direccion: string;
descripcion: string;
foto:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private camera: Camera, private db: DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoSitioPage');
    this.coords.lat = this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');
    this.getDireccion(this.coords).then(results => {
    this.direccion = results[0]['formatted_address'];
    }, errStatus => {
     });

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
     }, (err)=>{
     console.log( err); });


  }
  getDireccion(coords):any {
  var geocoder = new google.maps.Geocoder();


   return new Promise(function(resolve, reject) {
   geocoder.geocode({'location': coords} , function(results, status) {

   if (status == google.maps.GeocoderStatus.OK) {

   resolve(results);

   }
   else {

   reject( status);

    }

   });

   });

 }
 guardarSitio(){
 let sitio = {
 lat: this.coords.lat,
  lng: this.coords.lng ,
  direccion: this.direccion,
  descripcion: this.descripcion,
 foto: this.foto

}
    this.db.addSitio(sitio).then((res)=>{
      this.cerrarModal();
     alert('se ha introducido correctamente en la bd');
    },(err)=>{alert('error al meter en la bd'+err)})







}}
