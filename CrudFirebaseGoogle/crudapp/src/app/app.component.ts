import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AutenticaProvider } from '../providers/autentica/autentica';
import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'MisTabsPage';


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  private auth: AutenticaProvider, private fcm: FCM) {
    platform.ready().then(() => {
      this.fcm.subscribeToTopic('all');
this.fcm.getToken().then(token => {
  // backend.registerToken(token);
});
this.fcm.onNotification().subscribe(data => {
  alert('message received')
  if(data.wasTapped) {
   console.info("Received in background");
  } else {
   console.info("Received in foreground");
  };
});
this.fcm.onTokenRefresh().subscribe(token => {
  // backend.registerToken(token);
});
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
