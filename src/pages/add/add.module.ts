import { NgModule } from '@angular/core';
import {IonicPage, IonicPageModule} from 'ionic-angular';
import { AddPage } from './add';

@IonicPage()
@NgModule({
  declarations: [
    AddPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPage),
  ],
  exports: [
    AddPage
  ]
})
export class AddPageModule {}
