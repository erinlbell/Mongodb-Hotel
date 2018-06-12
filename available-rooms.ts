import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { BookingPage } from '../booking/booking';
 
@Component({
  selector: 'page-available-rooms',
  templateUrl: 'available-rooms.html'
})
export class AvailableRoomsPage {
 
    rooms: any;
 
    constructor(public nav: NavController, public navParams: NavParams) {
        this.rooms = this.navParams.get('rooms');
    }
 
    bookRoom(){
        this.nav.push(BookingPage);
           
        
    }
 
}
