import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoorverwijzingPage } from './doorverwijzing';

@NgModule({
  declarations: [
    DoorverwijzingPage,
  ],
  imports: [
    IonicPageModule.forChild(DoorverwijzingPage),
  ],
})
export class DoorverwijzingPageModule {}
