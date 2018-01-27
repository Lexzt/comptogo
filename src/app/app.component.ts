import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
//********************************************************************************************
//Delete above and use below
// import { TournamentsPage } from "../pages/tournaments/tournaments";
// import { AccomplishmentsPage } from "../pages/accomplishments/accomplishments";
import { SettingsPage } from "../pages/settings/settings";
import { LeaderboardsPage } from "../pages/leaderboards/leaderboards";
// import { FAQ } from "../pages/faq/faq";
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

//*******************************************************************************************************************
    this.appMenuItems = [
      {title: 'Find Tournaments', component: HomePage, icon: 'ios-search'},
      {title: 'My Accomplishments', component: LocalWeatherPage, icon: 'trophy'},
      {title: 'Settings', component: SettingsPage, icon: 'build'},
      {title: 'Leaderboards', component: LocalWeatherPage, icon: 'stats'},
      {title: 'FAQ', component: LocalWeatherPage, icon: 'help-circle'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
