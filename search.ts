import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController} from 'ionic-angular';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { AvailableRoomsPage } from '../available-rooms/available-rooms';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
   roomType: any;
    guests: any;
    beds: any;
    priceRange: any;
    from: any;
    to: any;

  constructor(public nav: NavController, public roomsService: RoomsProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
	   let today = new Date();
        let tomorrow = new Date();
       tomorrow.setDate(tomorrow.getDate() + 1);
	
        this.priceRange = {
            lower: 60,
            upper: 1000
        };
 
        this.roomType = 'standard';
        this.guests = 1;
        this.beds = 1;
        this.from = today.toISOString();
        this.to = tomorrow.toISOString();
 
    }
				
    findRooms(){
		 
 
		
				
        let options = {
            roomType: this.roomType,
            guests: this.guests,
            beds: this.beds,
            priceRange: this.priceRange,
            from: this.from,
            to: this.to
        };
 
        
  this.nav.push(AvailableRoomsPage, {
                    details: options
                });
		}
		
}
