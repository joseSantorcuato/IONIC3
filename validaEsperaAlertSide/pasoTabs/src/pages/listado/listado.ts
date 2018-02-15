import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PokeServiceProvider } from '../../providers/poke-service/poke-service';

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


  pokemones: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pokeServicePro: PokeServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {

    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

    loading.present();
    this.pokeServicePro.getPokemones()
    .subscribe(
      (data) => { // Success
        this.pokemones = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )

    setTimeout(() => {
      loading.dismiss();
    }, 3000);






  }


}
