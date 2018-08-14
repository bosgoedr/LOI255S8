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
  col1: boolean=false;
  col2: boolean=false;
  col3: boolean=false;
  col4: boolean=false;
  col5: boolean=false;
  col6: boolean=false;
  col7: boolean=false;
  col8: boolean=false;
  
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController) {
  }

  ionViewDidLeave(){
    this.col1 =false;
    this.col2 =false;
    this.col3 =false;
    this.col4 =false;
    this.col5 =false;
    this.col6 =false;
    this.col7 =false;
    this.col8 =false;
    
  }

  openChat(){
    this.col1 = true;
    this.navCtrl.push(ChatPage);
  }

  openConsult(){
    this.col2 = true;
    this.navCtrl.push(ConsultPage);
  }

  openDoorverwijzing(){
    this.col3 = true;
    this.navCtrl.push(DoorverwijzingPage);
  }

  openBloedonderzoek(){
    this.col4 = true;
    this.navCtrl.push(BloedonderzoekPage);
  }

  openBerichten(){
    this.col5 = true;
    this.navCtrl.push(BerichtenPage);
  }

  openEpd(){
    this.col6 = true;
    this.navCtrl.push(EpdPage);
  }
  
  openMedicijnen(){
    this.col7 = true;
    this.navCtrl.push(MedicijnPage);
  }

  openSpoed(){
    this.col8 = true;
    this.navCtrl.push(SpoedPage);
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
