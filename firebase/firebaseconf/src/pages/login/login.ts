import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AutenticaProvider } from '../../providers/autentica/autentica';
// for AngularFireDatabase


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user= { email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AutenticaProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');


  }
  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // Uusario creado, podria mostrar modal
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })


  }
  login(){
      this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
        }
      )
       .catch(err=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })

    }
  }
