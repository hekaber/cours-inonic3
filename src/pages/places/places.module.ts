import { NgModule } from '@angular/core';
import {IonicPage, IonicPageModule} from 'ionic-angular';
import { PlacesPage } from './places';

@IonicPage()
@NgModule({
  declarations: [
    PlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesPage),
  ],
  exports: [
    PlacesPage
  ]
})
export class PlacesPageModule {}
