import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroSliderPage } from '../pages/intro-slider/intro-slider';
import { LoadingPage } from '../pages/loading/loading';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DbProvider } from '../providers/db/db';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
public viewCtrl: ViewController;

rootPage = LoadingPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public db: DbProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.db.openDb()
      .then(() => this.db.createTableSitios())
      platform.registerBackButtonAction(() => {
      platform.exitApp();


});



    });
  }
}
