import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the MedicijndetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicijndetail',
  templateUrl: 'medicijndetail.html',
})
export class MedicijndetailPage {
  Medicijn = this.navParams.get('data');

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicijndetailPage');
  }

  closeModal(){
    this.view.dismiss();
  }
}
