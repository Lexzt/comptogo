import {Component} from "@angular/core";
import { NavController, LoadingController, ToastController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-checkout-trip',
  templateUrl: 'checkout-trip.html'
})
export class CheckoutTripPage {
  // trip data
  public trip: any;
  public adultsinfo: any;
  // number of adults
  public adults = 2;
  public children = 2;
  // date
  public date = new Date();
  public dateInString = "";

  public paymethods = 'creditcard';

  constructor(public nav: NavController,
    public tripService: TripService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams) {
    // set sample data
    this.trip = tripService.getItem(1);
    this.adults = navParams.get('adults');
    this.children = navParams.get('children');
    //this.date.setUTCSeconds(navParams.get('date') / 1000);
    this.date.setUTCSeconds(1517896800 / 1000);
    this.dateInString = this.date.toLocaleDateString() + " @ " +  this.date.toLocaleTimeString();
  }

  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Book Activity Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(HomePage);
    }, 3000)
  }
}
