import { EpdPage } from './../epd/epd';
import { BerichtenPage } from './../berichten/berichten';
import { BloedonderzoekPage } from './../bloedonderzoek/bloedonderzoek';
import { DoorverwijzingPage } from './../doorverwijzing/doorverwijzing';
import { ConsultPage } from './../consult/consult';
import { ChatPage } from './../chat/chat';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { SpoedPage } from '../spoed/spoed';
import { MedicijnPage } from '../medicijn/medicijn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController) {

  }

  openLogin(){
    this.navCtrl.push(LoginPage)
  }
  
  openSpoed(){
    this.navCtrl.push(SpoedPage);
  }

  openChat(){
    this.navCtrl.push(ChatPage);
  }

  openConsult(){
    this.navCtrl.push(ConsultPage);
  }

  openDoorverwijzing(){
    this.navCtrl.push(DoorverwijzingPage);
  }

  openBloedonderzoek(){
    this.navCtrl.push(BloedonderzoekPage);
  }

  openBerichten(){
    this.navCtrl.push(BerichtenPage);
  }

  openEpd(){
    this.navCtrl.push(EpdPage);
  }
  
  openMedicijnen(){
    this.navCtrl.push(MedicijnPage);
  }

  logout(){
    const loader = this.loadingCtrl.create({
       content: "Bezig met afmelden...",
       duration: 3000,
       dismissOnPageChange: true
     });
     loader.present();
 
     window.location.reload();
 
     setTimeout(() => {
     this.navCtrl.setRoot(LoginPage);
     }, 1000);
   }
}
