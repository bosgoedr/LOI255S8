import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BerichtenPage } from './berichten';

@NgModule({
  declarations: [
    BerichtenPage,
  ],
  imports: [
    IonicPageModule.forChild(BerichtenPage),
  ],
})
export class BerichtenPageModule {}
