import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenites: 'Air Conditioner , WIFI, Tv, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTIme: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.48
    },

    {
      roomNumber: 2,
      roomType: 'Suite',
      amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Sofa',
      price: 1000,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTIme: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.78
    },

    {
      roomNumber: 3,
      roomType: 'Penthouse',
      amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
      price: 5000,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTIme: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.32
    }

  ]


  getRooms() {
    return this.roomList

  }
}
