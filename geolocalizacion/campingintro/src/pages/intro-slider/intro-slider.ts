import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MisTabsPage } from '../mis-tabs/mis-tabs';


/**
 * Generated class for the IntroSliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-slider',
  templateUrl: 'intro-slider.html',
})
export class IntroSliderPage {

  public options;

    constructor(private nav: NavController,
                private storage: Storage) {
        this.options = {
            show: false
        };
    }

    complete() {
        if (!this.options.show) {
            //Save flag if don't need to show intro slider on next app startup
            this.storage.set('showIntroSlider', 0).then(() => {
                // we don't actually need this callbacks in such simple example,
                // but in real apps it will be useful
            });
        }
        this.nav.setRoot('MisTabsPage');
    }
}
