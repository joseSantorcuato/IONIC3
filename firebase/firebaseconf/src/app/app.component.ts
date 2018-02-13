import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AutenticaProvider } from '../providers/autentica/autentica';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'MisTabsPage';


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  private auth: AutenticaProvider) {
    platform.ready().then(() => {
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = 'MisTabsPage';
        }
          else{
            this.rootPage = 'LoginPage';
          }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
