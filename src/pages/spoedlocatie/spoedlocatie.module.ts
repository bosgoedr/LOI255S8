import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpoedlocatiePage } from './spoedlocatie';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    SpoedlocatiePage,
  ],
  imports: [
    IonicPageModule.forChild(SpoedlocatiePage),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAP21I2aNndDP4trzgdv-lDXPbo8BflFCA",
      libraries: ["places"]
    })
  ],
})
export class SpoedlocatiePageModule {}
