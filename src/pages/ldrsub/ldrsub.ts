import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from "../userprofile/userprofile";

@Component({
  selector: 'page-ldrsub',
  templateUrl: 'ldrsub.html'
})
export class ldrsub {

  constructor(public navCtrl: NavController) {

  }

  toUserProfile(){
    this.navCtrl.push(UserProfilePage);
  }

}
