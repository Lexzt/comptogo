import {Component} from "@angular/core";
import { NavController, NavParams} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  // trip info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;

  public id = 0;

  constructor(public nav: NavController,
    public tripService: TripService,
    public navParams: NavParams) {
    // set sample data
    this.trip = navParams.get('id');
    // console.log(this.trip.$key);
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
    this.nav.push(CheckoutTripPage, {
      adults: this.adults,
      children: this.children,
      date: this.trip.date,
      trip: this.trip,
    });
  }
}
