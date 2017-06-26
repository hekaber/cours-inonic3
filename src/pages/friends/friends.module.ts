import { NgModule } from '@angular/core';
import {IonicPage, IonicPageModule} from 'ionic-angular';
import { FriendsPage } from './friends';

@IonicPage()
@NgModule({
  declarations: [
    FriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsPage),
  ],
  exports: [
    FriendsPage
  ]
})
export class FriendsPageModule {}
