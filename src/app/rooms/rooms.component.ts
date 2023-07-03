import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Hyatt';
  numberOfRooms = 10

  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20

  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenites: 'Air Conditioner , WIFI, Tv, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTIme: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023')
    },

    {
      roomNumber: 2,
      roomType: 'Suite',
      amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Sofa',
      price: 1000,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTIme: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023')
    },

    {
      roomNumber: 3,
      roomType: 'Penthouse',
      amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
      price: 5000,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTIme: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023')
    }


  ]

  toggle() {

    this.hideRooms = !this.hideRooms

  }

}
