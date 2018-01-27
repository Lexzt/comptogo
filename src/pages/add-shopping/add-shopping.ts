import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database-deprecated';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  // Creating a new Object 
  shoppingItem = {} as ShoppingItem;

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
  structure: any = { lower: 0, upper: 10 };

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('tournament-list');

    /*
      shopping-list:
        0:
          itemName: 'Pizza',
          itemNumber: 1
        1:
          itemName: 'Cheesecake',
          itemNumber: 5
    */
  }
  
  addShoppingItem(shoppingItem: ShoppingItem) {
    var str = this.shoppingItem.date.split("-");
    var time = this.shoppingItem.time.split(":");
    var d = new Date(Number(str[0]), Number(str[1]) - 1, Number(str[2]), Number(time[0]), Number(time[1]));

    this.shoppingItemRef$.push({
      name: this.shoppingItem.name,
      description: this.shoppingItem.description,
      sports: this.shoppingItem.sports,
      location: this.shoppingItem.location,
      price: this.shoppingItem.price,
      noOfHours: this.shoppingItem.noOfHours,
      rank_min: this.structure.lower,
      rank_max: this.structure.upper,
      date: Math.round(d.getTime() / 1000),
      noOfParticipants: 1,
      prize: this.shoppingItem.price,
      cancellation_time: "7d",
      thumb: "assets/img/trip/thumb/trip_1.jpg",
      images: [
        "assets/img/trip/thumb/trip_5.jpg",
        "assets/img/trip/thumb/trip_6.jpg",
        "assets/img/trip/thumb/trip_7.jpg",
        "assets/img/trip/thumb/trip_8.jpg",
      ],
      highlights: [
        "Sport: " + this.shoppingItem.sports,
        "Rank " + this.structure.lower + " - Rank " + this.structure.upper,
        "Entry Fee: $" + this.shoppingItem.price,
        "Expected Duration ~ " + this.shoppingItem.noOfHours + " Hrs",
        "Date: " + d.toLocaleString(),
        "Prize Pool: $" + this.shoppingItem.price,
      ]
    });

    // Reset our ShoppingItem
    this.shoppingItem = {} as ShoppingItem;

    // Navigate the user back to the ShoppingListPage
    this.navCtrl.pop();
  }

  onChange(ev: any) {
    // console.log('Changed', ev);
    this.structure.lower = ev._valA;
    this.structure.upper = ev._valB;
  }
}
