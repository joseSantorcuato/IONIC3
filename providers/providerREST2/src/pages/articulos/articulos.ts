import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the ArticulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulos',
  templateUrl: 'articulos.html',
})
export class ArticulosPage {

  users: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpPro: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosPage');
    this.httpPro.getUsers()
   .subscribe(
     (data) => { // Success
       this.users = data['results'];
     },
     (error) =>{
       console.error(error);
     }
   )
  }

}
