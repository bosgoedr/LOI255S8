import { HttpClientModule } from '@angular/common/http';
import { DoorverwijzingPageModule } from './../pages/doorverwijzing/doorverwijzing.module';
import { ConsultPageModule } from './../pages/consult/consult.module';
import { BloedonderzoekPageModule } from './../pages/bloedonderzoek/bloedonderzoek.module';
import { ChatPageModule } from './../pages/chat/chat.module';
import { BerichtenPageModule } from './../pages/berichten/berichten.module';
import { MedicijnPageModule } from './../pages/medicijn/medicijn.module';
import { HuisartslocatiePageModule } from './../pages/huisartslocatie/huisartslocatie.module';
import { SpoedPageModule } from './../pages/spoed/spoed.module';
import { SpoedlocatiePageModule } from './../pages/spoedlocatie/spoedlocatie.module';
import { ProfilePageModule } from './../pages/profile/profile.module';
import { LoginPageModule } from './../pages/login/login.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AgmCoreModule } from '@agm/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { SpoedvervolgPageModule } from '../pages/spoedvervolg/spoedvervolg.module';
import { MedicijndetailPageModule } from '../pages/medicijndetail/medicijndetail.module';
import { Camera } from '@ionic-native/camera';
import { EpdPageModule } from '../pages/epd/epd.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LoginPageModule,
    ProfilePageModule,
    BerichtenPageModule,
    EpdPageModule,
    ChatPageModule,
    BloedonderzoekPageModule,
    ConsultPageModule,
    DoorverwijzingPageModule,
    HuisartslocatiePageModule,
    SpoedlocatiePageModule,
    SpoedvervolgPageModule,
    SpoedPageModule,
    MedicijndetailPageModule,
    MedicijnPageModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAP21I2aNndDP4trzgdv-lDXPbo8BflFCA",
      libraries: ["places"]
  }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
