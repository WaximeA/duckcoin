import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrehomePage } from './prehome';

@NgModule({
  declarations: [
    PrehomePage,
  ],
  imports: [
    IonicPageModule.forChild(PrehomePage),
  ],
})
export class PrehomePageModule {}
