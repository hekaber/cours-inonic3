import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import { PlacesPage } from '../places/places';
import { FriendsPage } from '../friends/friends';
import { AroundPage } from '../around/around';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  placesPg: PlacesPage;
  friendsPg = FriendsPage;
  aroundPg = AroundPage;
  addPg = AddPage;

  constructor(public navCtrl: NavController) {

  }

}
