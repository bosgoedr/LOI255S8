import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the MedicijnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicijn',
  templateUrl: 'medicijn.html',
})
export class MedicijnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicijnPage');
  }

  openIbuprofen(){
    const myData = {name: 'Ibuprofen',
                    bijsluiter: 'Dit is een stukje tekst voor de bijsluiter, bla bla bla bla bla bla bla bla'};

    const myModel = this.modal.create('MedicijndetailPage',{data: myData})
    myModel.present();
  }

  opeDiclofenac(){
    const myData = {name: 'Diclofenac',
                    bijsluiter: 'Diclofenac (Ontstekingsremmer) Ontstekingsremmende pijnstiller, veel gebruikt bij gewrichtsklachten'};

    const myModel = this.modal.create('MedicijndetailPage',{data: myData})
    myModel.present();
  }

  openOmeprazol(){
    const myData = {name: 'Omeprazol',
                    bijsluiter: '(Maagzuurremmer) Wordt vooral gebruikt bij mensen die last hebben van brandend maagzuur of een maagzweer hebben Wordt tegenwoordig steeds meer gebruikt bij baby’s die veel spugen!                    Werking: verminderen de aanmaak van zuur in de maag                    Bijwerking: maag-darmklachten, hoofdpijn, duizeligheid en overgevoeligheid.   Bijwerking: onttrekt kalk uit het lichaam en creëert zodoende osteoporose!'};

    const myModel = this.modal.create('MedicijndetailPage',{data: myData})
    myModel.present();
  }

  openVentolin(){
    const myData = {name: 'Ventolin',
                    bijsluiter: 'Dit is een stukje tekst voor de bijsluiter, bla bla bla bla bla bla bla bla'};

    const myModel = this.modal.create('MedicijndetailPage',{data: myData})
    myModel.present();
  }

}
