import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BloedonderzoekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloedonderzoek',
  templateUrl: 'bloedonderzoek.html',
})
export class BloedonderzoekPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BloedonderzoekPage');
  }
  
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
