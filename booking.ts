import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
 
    rooms: any;
 
    constructor(public nav: NavController, public navParams: NavParams) {
    }
 
    book(){
		alert("Room is successfully booked");
        this.nav.push(HomePage);
           
        
    }
 
}
