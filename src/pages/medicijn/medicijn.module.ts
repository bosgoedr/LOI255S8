import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicijnPage } from './medicijn';

@NgModule({
  declarations: [
    MedicijnPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicijnPage),
  ],
})
export class MedicijnPageModule {}
