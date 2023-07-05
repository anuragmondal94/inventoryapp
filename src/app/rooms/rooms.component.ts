import { AfterViewInit, Component, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit() {
   this.headerComponent.title = "Rooms View"
  //  this.headerChildrenComponent.last.title = "Last Title"
  }

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

  @ViewChild(HeaderComponent ) headerComponent !: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildrenComponent !: QueryList<HeaderComponent>

  constructor(@SkipSelf() private roomService : RoomsService) {}

  ngOnInit(): void {
    // console.log(this.headerComponent)

    // component communtication using service
    this.roomList = this.roomService.getRooms()

   
  }

  toggle() {

    this.hideRooms = !this.hideRooms
    this.title = "Rooms List"

  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
    this.title = "RoomS!!!"

  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Additional Room',
      amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
      price: 2000,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTIme: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.99
    }

    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }

}
