import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroSliderPage } from '../intro-slider/intro-slider';
import { MisTabsPage } from '../mis-tabs/mis-tabs';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(private nav: NavController,
                private storage: Storage) {
    }

    ionViewDidEnter() {
        this.storage.get('showIntroSlider').then((v) => {
            if (v == 0) {
            	this.nav.push(MisTabsPage);
            }
            else {
            	this.nav.push(IntroSliderPage);
            }
        }, ()=> {
        	this.nav.push(MisTabsPage);
        });
    }
  }
