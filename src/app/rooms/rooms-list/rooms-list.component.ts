import { Component, EventEmitter, Input, Output , ChangeDetectionStrategy, OnChanges, SimpleChanges} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // only use when data not being changed in the component. rely on i/p adn o/p
  changeDetection : ChangeDetectionStrategy.OnPush
 
})
export class RoomsListComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()

    }
  }

  @Input() rooms : RoomList [] = [];

  @Input() title: string = ''

  @Output() selectedRoom = new EventEmitter <RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

}
