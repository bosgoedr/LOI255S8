import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chatPhoto:any;
  myPhoto:any;
  chatMsg;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,private camera: Camera) {
    this.getPatientImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  takePhoto(){        
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetHeight: 100,
      targetWidth: 100
    }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.chatPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  getPatientImage(){
    this.storage.get('patientImage').then((data) => {
      if(data) {
        this.myPhoto = data;
        console.log('plaatje gevonden');
      }
      else
      {
        this.myPhoto = './assets/imgs/blank.png';
        console.log('blanco');
      }
    })
  }

  sendChat(){
    this.chatMsg = ""
  }

}
