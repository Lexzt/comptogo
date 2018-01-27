import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>


  // list of trips
  public trips: any;

  constructor(public nav: NavController,
    private database: AngularFireDatabase,
    public tripService: TripService) {
    // set sample data
    this.trips = tripService.getAll();
    this.shoppingListRef$ = this.database.list('tournament-list');

  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

  addTournament() {
    this.nav.push(AddShoppingPage);
  }
}
