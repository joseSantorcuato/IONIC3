import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { IntroSliderPage } from '../pages/intro-slider/intro-slider';
import { MisTabsPage } from '../pages/mis-tabs/mis-tabs';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { LoadingPage } from '../pages/loading/loading';
import { Camera } from '@ionic-native/camera';
import { DbProvider } from '../providers/db/db';
import { SQLite } from '@ionic-native/sqlite';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroSliderPage,
    MisTabsPage,
    LoadingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroSliderPage,
    LoadingPage,
    MisTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    DbProvider,
    SQLite
  ]
})
export class AppModule {}
