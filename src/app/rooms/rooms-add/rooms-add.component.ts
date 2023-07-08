import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }

  successMessage: string = ''

  constructor(private roomService: RoomsService) { }

  

    AddRoom(roomsForm : NgForm) {
      this.roomService
      .addRoom(this.room)
      .subscribe((data) => {
        this.successMessage = 'Room added successfully'
      roomsForm.reset()})
  }

}
