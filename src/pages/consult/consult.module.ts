import { CalendarModule } from "ion2-calendar";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultPage } from './consult';

@NgModule({
  declarations: [
    ConsultPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultPage),CalendarModule
  ],
})
export class ConsultPageModule {}
