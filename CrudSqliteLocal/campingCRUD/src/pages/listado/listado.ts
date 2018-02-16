import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { AlertController } from 'ionic-angular';

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

  sitios:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

  ionViewDidEnter(){
     this.db.getSitios().then((res)=>{
    this.sitios = [];
    for(var i = 0; i < res.rows.length; i++){
        this.sitios.push({
          id: res.rows.item(i).id,
          lat: res.rows.item(i).lat,
          lng: res.rows.item(i).lng,
          direccion: res.rows.item(i).direccion,
          descripcion: res.rows.item(i).descripcion,
          foto: res.rows.item(i).foto
        });
    }

    },(err)=>{ /* alert('error al sacar de la bd'+err) */ })
   }

   muestraSitio(sitio){
   let modalSitio = this.modalCtrl.create('ModalDetalleSitioPage', sitio );
   modalSitio.present(); }

   borrarSitio(id){

    let alert = this.alertCtrl.create({
      title: 'Confirmar borrado',
      message: '¿Estás seguro de que deseas eliminar este sitio?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no así que no hacemos nada
          }
        },
        {
          text: 'Si',
          handler: () => {
               // AquÍ borramos el sitio en la base de datos

           }
        }
      ]
    });

    alert.present();

}
}
