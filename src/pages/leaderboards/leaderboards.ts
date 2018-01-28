import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ldrsub } from "../ldrsub/ldrsub";

@Component({
  selector: 'page-leaderboards',
  templateUrl: 'leaderboards.html'
})
export class LeaderboardsPage {

  constructor(public navCtrl: NavController) {

  }

  moveScene1(){
    this.navCtrl.push(ldrsub);
  }
  moveScene2(){
    this.navCtrl.push(ldrsub);
  }
  moveScene3(){
    this.navCtrl.push(ldrsub);
  }
  moveScene4(){
    this.navCtrl.push(ldrsub);
  }

}
