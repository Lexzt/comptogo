import {Component} from "@angular/core";
import { NavController, LoadingController, ToastController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {HomePage} from "../home/home";
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Subscription } from 'rxjs/Subscription';
import { TripsPage } from "../trips/trips";

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

  shoppingItemSubscription: Subscription;
  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;
  shoppingItem = {} as ShoppingItem;

  constructor(public nav: NavController,
    public tripService: TripService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {
    // set sample data
    this.trip = navParams.get('trip');
    this.adults = navParams.get('adults');
    this.children = navParams.get('children');
    //this.date.setUTCSeconds(navParams.get('date') / 1000);
    this.date.setUTCSeconds(1517896800 / 1000);
    this.dateInString = this.date.toLocaleDateString() + " @ " + this.date.toLocaleTimeString();
    this.shoppingItemRef$ = this.database.object('tournament-list/' + this.trip.$key);
    this.shoppingItemSubscription =
      this.shoppingItemRef$.subscribe(
        shoppingItem => this.shoppingItem = shoppingItem);
    // console.log(this.shoppingItem);
  }

  // process send button
  send() {
    this.shoppingItem.noOfParticipants += this.adults;
    this.shoppingItem.prize += this.adults * this.shoppingItem.price;
    this.shoppingItem.highlights[5] = "Prize Pool: $" + Number(this.shoppingItem.price) * Number(this.shoppingItem.noOfParticipants);
    this.shoppingItemRef$.update(this.shoppingItem);

    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      // cssClass: 'profile-bg',
      message: 'Joined Activity Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot(TripsPage);
    }, 1000)
  }
}
