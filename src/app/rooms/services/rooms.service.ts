import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log(this.config.apiEndpoint)

  }

  // roomList: RoomList[] = [
  //   {
  //     roomNumber: '1',
  //     roomType: 'Deluxe Room',
  //     amenites: 'Air Conditioner , WIFI, Tv, Kitchen',
  //     price: 500,
  //     photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
  //     checkInTIme: new Date('11-Nov-2023'),
  //     checkoutTime: new Date('12-Nov-2023'),
  //     rating: 3.48
  //   },

  //   {
  //     roomNumber: '2',
  //     roomType: 'Suite',
  //     amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Sofa',
  //     price: 1000,
  //     photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
  //     checkInTIme: new Date('11-Nov-2023'),
  //     checkoutTime: new Date('12-Nov-2023'),
  //     rating: 4.78
  //   },

  //   {
  //     roomNumber: '3',
  //     roomType: 'Penthouse',
  //     amenites: 'Air Conditioner , WIFI, Tv, Kitchen, Lounge, Study',
  //     price: 5000,
  //     photos: 'https://unsplash.com/photos/YMOHw3F1Hdk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
  //     checkInTIme: new Date('11-Nov-2023'),
  //     checkoutTime: new Date('12-Nov-2023'),
  //     rating: 4.32
  //   }

  // ]

  roomlist: RoomList[] = []
  headers = new HttpHeaders({ 'token': '12345ionrgionw' })


  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms')

  }

  // "$" is used to denote a stream
  getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
    headers: this.headers
  }).pipe(
    shareReplay(1)
  )

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room, {
      headers: this.headers
    })
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room)
  }

  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }
  // using request api
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    })
    return this.http.request(request)
  }
}
