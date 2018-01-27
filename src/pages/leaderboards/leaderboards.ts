import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
@Component({
  selector: 'page-leaderboards',
  templateUrl: 'leaderboards.html'
})
export class LeaderboardsPage {

  constructor(public navCtrl: NavController) {
    
  }

  moveScene1(){
    this.navCtrl.push(HomePage);
  }
  moveScene2(){
    this.navCtrl.push(HomePage);
  }
  moveScene3(){
    this.navCtrl.push(HomePage);
  }
  moveScene4(){
    this.navCtrl.push(HomePage);
  }

}
