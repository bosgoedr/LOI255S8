import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EpdPage } from './epd';

@NgModule({
  declarations: [
    EpdPage,
  ],
  imports: [
    IonicPageModule.forChild(EpdPage),
  ],
})
export class EpdPageModule {}
