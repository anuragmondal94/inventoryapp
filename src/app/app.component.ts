import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel"
  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  // }
  title = 'inventoryApp';

  role = 'Admin'
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef
  @ViewChild('name', {static: true}) name!: ElementRef;

}
