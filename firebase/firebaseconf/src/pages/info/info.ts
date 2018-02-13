import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticaProvider } from '../../providers/autentica/autentica';

/**
 * Generated class for the InfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AutenticaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  cerrarSesion(){
      this.auth.logout();
  }

}
