import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicijndetailPage } from './medicijndetail';

@NgModule({
  declarations: [
    MedicijndetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicijndetailPage),
  ],
})
export class MedicijndetailPageModule {}
