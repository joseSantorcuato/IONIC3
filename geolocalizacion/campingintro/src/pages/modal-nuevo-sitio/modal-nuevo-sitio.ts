import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
valoración: number;
foto:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
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

   }); }

}
