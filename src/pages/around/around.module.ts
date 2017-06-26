import { NgModule } from '@angular/core';
import {IonicPage, IonicPageModule} from 'ionic-angular';
import { AroundPage } from './around';

@IonicPage()
@NgModule({
  declarations: [
    AroundPage,
  ],
  imports: [
    IonicPageModule.forChild(AroundPage),
  ],
  exports: [
    AroundPage
  ]
})
export class AroundPageModule {}
