import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent {

  id: number =0
  id$ = this.router.paramMap.pipe(map((params) => params.get('roomId')))
  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
    // this.id = this.router.snapshot.params['roomId']                    //will never recieve a new value once in the view

    // this.router.paramMap.subscribe((params) => {params.get('roomID')})
  
  }

}
