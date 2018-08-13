import { HuisartslocatiePage } from './../huisartslocatie/huisartslocatie';
import { SpoedlocatiePage } from './../spoedlocatie/spoedlocatie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpoedvervolgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spoedvervolg',
  templateUrl: 'spoedvervolg.html',
})
export class SpoedvervolgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  huisartsClick() {
    console.log('test');
    this.navCtrl.push(HuisartslocatiePage);
  }

  locatieClick() {
    console.log('test');
    this.navCtrl.push(SpoedlocatiePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpoedvervolgPage');
  }

}
