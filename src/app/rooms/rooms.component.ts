import { AfterViewInit, Component, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

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

  hideRooms = true;

  selectedRoom !: RoomList

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20

  }
  title = 'Room List'

  roomList: RoomList[] = [];

  stream = new Observable<string>(observer => {
    observer.next('user1')
    observer.next('user2')
    observer.next('user3')
    observer.complete()
    // observer.error('error')
  })

  @ViewChild(HeaderComponent) headerComponent !: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildrenComponent !: QueryList<HeaderComponent>

  constructor(@SkipSelf() private roomService: RoomsService) { }

  totalBytes = 0

  subscription !: Subscription

  error$ = new Subject<string>()

  getError$ = this.error$.asObservable()

  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      console.log(err)
      this.error$.next(err.message)
      return of([])
    })
  )

  roomsCount$ = this.roomService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  ngOnInit(): void {
    // console.log(this.headerComponent)

    // component communtication using service
    // this.roomList = this.roomService.getRooms()
    this.roomService.getRooms().subscribe(rooms => {
      this.roomList = rooms
    })

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    })
    this.stream.subscribe((data) => console.log(data))
    //   this.roomService.getRooms$.subscribe((rooms) =>{
    //   this.roomList = rooms
    //  })
    //  request api implementation
    this.roomService.getPhotos().subscribe((data) => {
      console.log(data)
    })

    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made')
          break
        }

        case HttpEventType.ResponseHeader: {
          console.log('Request Success')
          break
        }

        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded
          break

        }

        case HttpEventType.Response: {
          console.log(event.body)
        }
      }
    })

    



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
      // roomNumber: '4',
      roomType: 'Additional Room',
      amenities: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
      price: 2000,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.99,
      roomNumber: ''
    }

    // this.roomList.push(room)
    // this.roomList = [...this.roomList, room]
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = data;

    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Additional Room',
      amenities: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
      price: 2000,
      photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
      checkInTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 3.99,
    }

    this.roomService.editRoom(room).subscribe((data) => {
      this.roomList = data
    })

  }

  deleteRoom() {
    this.roomService.delete('3').subscribe((data) => {
      this.roomList = data
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
