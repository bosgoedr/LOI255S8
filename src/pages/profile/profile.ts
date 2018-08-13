import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  patNaam: string;
  patGebDatum: string;
  patTelefoon: string;
  patEmail: string;
  editMode: boolean = false;
  myPhoto:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,private camera: Camera) {
  }

  ionViewDidLoad() {
    this.getPatientInfo();
    console.log('ionViewDidLoad ProfilePage');
  }

  takePhoto(){        
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1,
      allowEdit: true,
      targetHeight: 100,
      targetWidth: 100
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    this.storage.set('patientImage',this.myPhoto);
    }, (err) => {
    // Handle error
    });
  }

  getPatientInfo(){
    this.storage.get('patientNaam').then((data) => {
      if(data) {
        this.patNaam = data;
      }
      else{
        this.editMode = false;
      }
    });
    this.storage.get('patientGebDatum').then((data) => {
      if(data) {
        this.patGebDatum = data;
      }
    });
    this.storage.get('patientTel').then((data) => {
      if(data) {
        this.patTelefoon = data;
      }
    });
    this.storage.get('patientEmail').then((data) => {
      if(data) {
        this.patEmail = data;
      }
    });
    this.storage.get('patientImage').then((data) => {
      if(data) {
        this.myPhoto = data;
      }
      else
      {
        this.myPhoto = './assets/imgs/blank.png';
      }
    })
  }

  setEditMode(value){
    this.editMode = value;
   }

  setPatientInfo(){
    this.storage.set('patientNaam',this.patNaam);
    this.storage.set('patientGebDatum',this.patGebDatum);
    this.storage.set('patientTel',this.patTelefoon);
    this.storage.set('patientEmail',this.patEmail);
    this.setEditMode(false);
    console.log('patientinfo gevuld');
  }

}
