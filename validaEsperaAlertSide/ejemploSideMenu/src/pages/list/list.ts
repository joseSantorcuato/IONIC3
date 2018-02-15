import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeServiceProvider } from '../../providers/poke-service/poke-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  pokemones: any[] = [];

   constructor(public navCtrl: NavController, public navParams: NavParams, public pokeServicePro: PokeServiceProvider) {
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad ListPage');

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
