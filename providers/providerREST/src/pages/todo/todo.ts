import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeServiceProvider } from '../../providers/poke-service/poke-service';

/**
 * Generated class for the TodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  pokemones: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pokeServicePro: PokeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');

    this.pokeServicePro.getPokemones()
    .subscribe(
      (data) => { // Success
        this.pokemones = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
