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

  selectedRoom !: RoomList

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20

  }
  title = 'Room List'

  roomList: RoomList[] = [];
 
  ngOnInit(): void{

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenites: 'Air Conditioner , WIFI, Tv, Kitchen',
        price: 500,
        photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        checkInTIme: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating : 3.48
      },
  
      {
        roomNumber: 2,
        roomType: 'Suite',
        amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Sofa',
        price: 1000,
        photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        checkInTIme: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating : 4.78
      },
  
      {
        roomNumber: 3,
        roomType: 'Penthouse',
        amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
        price: 5000,
        photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        checkInTIme: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating : 4.32
      }
  
    ]

  }

  toggle() {

    this.hideRooms = !this.hideRooms
    this.title = "Rooms!!!"

  }

  selectRoom(room: RoomList){
    this.selectedRoom = room
    this.title = "RoomS!!!"

  }

  addRoom() {
    const room : RoomList = {
      roomNumber: 4,
        roomType: 'Additional Room',
        amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
        price: 2000,
        photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        checkInTIme: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov-2023'),
        rating : 3.99
    }

    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }

}
