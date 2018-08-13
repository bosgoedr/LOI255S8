import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SpoedPage } from '../spoed/spoed';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  Off1:boolean = true;
  Off2:boolean = true;
  Off3:boolean = true;
  Off4:boolean = true;
  pinInput: any;
  strCode: string;
  noPinSet:boolean;
  noCompletePin:boolean;
  patNaam: string;
  patGebDatum: string;
  patTelefoon: string;
  patEmail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private storage: Storage) {
    this.pinInput = [null,null,null,null]
    this.isPinCodeSet();
    this.getPatientEmail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  getPatientEmail(){
    this.storage.get('patientEmail').then((data) => {
      if(data) {
        this.patEmail = data;
      }
      else
      {
        this.patEmail = "NotSet"
      }
    })
    console.log(this.patEmail);
  }

  forgetPass(){
    console.log(this.patEmail);
    if (this.patEmail=="NotSet"){
      this.clearData();
      this.alertProfielReset();
    }
    else
    {
      this.alertSendEmail();
    }
  }

  isEmailSet(){
    this.storage.get('patientEmail').then((data) => {
      if(data) {
        this.noPinSet = false;
      }
      else {
        this.noPinSet = true;
      }
    });
  }

  isPinCodeSet(){
    this.storage.get('patientPin').then((data) => {
      if(data) {
        this.noPinSet = false;
      }
      else {
        this.noPinSet = true;
      }
    });
  }

  chkInlogCode(){
    let strPinInput:string;
    strPinInput = this.pinInput[0] + '' + this.pinInput[1] + '' + this.pinInput[2] + '' + this.pinInput[3];
    this.storage.get('patientPin').then((data) => {
      if (data) {
        if (strPinInput==data){
          console.log ('Inloggen maar');
          
          this.navCtrl.setRoot(TabsPage);
         // this.navCtrl.push(TabsPage)
        }
        else{
          console.log ('foutieve code')
        }        
      }
      else{
        if (strPinInput=="0000") {
          console.log('inloggen')
        }
        else{
        console.log('fout niet inloggen')
        }
      }
    });
    this.clearPinCode();
  }

  clearData(){
    this.storage.clear();
    this.noPinSet = true;
  }
 
  setFirstCode(){
    let strPinInput:string;
    strPinInput = this.pinInput[0] + '' + this.pinInput[1] + '' + this.pinInput[2] + '' + this.pinInput[3];
    if (strPinInput.length == 4) {
      this.storage.set('patientPin',strPinInput)
      console.log('code gemaakt');
      this.noPinSet = false;
      this.noCompletePin = false;
      this.clearPinCode();
      this.alertPincodeSet();
    }
    else{
      console.log('pin niet compleet');
      this.noPinSet = true;
      this.noCompletePin = true;
      this.clearPinCode();
    }
  }

  alertPincodeSet() {
    const alert = this.alertCtrl.create({
      title: 'Pincode aangemaakt',
      subTitle: 'HuisartsenApp 2022 is klaar voor gebruik',
      buttons: ['OK']
    });
    alert.present();
  }

  alertProfielReset() {
    const alert = this.alertCtrl.create({
      title: 'Profiel reset',
      subTitle: 'Er geen email adres ingesteld, uit veiligheid is uw profiel gereset',
      buttons: ['OK']
    });
    alert.present();
  }

  alertSendEmail() {
    const alert = this.alertCtrl.create({
      title: 'Email verstuurd',
      subTitle: 'Beveiligde bericht verstuurd met hierin uw pincode, controleer uw ingestelde email adres',
      buttons: ['OK']
    });
    alert.present();
  }

  insertPin(intCode){
    if (this.pinInput[0]==null){
      this.pinInput[0] = intCode;
      this.Off1 = false;
    }
    else
    {
      if (this.pinInput[1]==null){
        this.pinInput[1] = intCode;
        this.Off2 = false;
      }
      else
      {
        if (this.pinInput[2]==null){
          this.pinInput[2] = intCode;
          this.Off3 = false;
        }
        else
        {
          if (this.pinInput[3]==null){
          this.pinInput[3] = intCode;
          this.Off4 = false;
          }
        }
      }
    }

     //this.pinInput[1] = intCode;
    console.log('Your code is', this.pinInput[0],this.pinInput[1],this.pinInput[2],this.pinInput[3]);

  }

  clearPinCode(){
    this.Off1 = true;
    this.Off2 = true;
    this.Off3 = true;
    this.Off4 = true;
    this.pinInput = [null,null,null,null]
  }

  openSpoed(){
    this.navCtrl.push(SpoedPage);
  }
}
