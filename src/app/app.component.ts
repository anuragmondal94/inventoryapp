import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import {LocalStorageToken} from './localStorag.token'
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hilton Hotel" 
    this.localStorage.setItem('name', 'Hilton Hotel')
  }

  constructor(@Inject(LocalStorageToken) private localStorage: any,
  private initService: InitService
  ) {
    console.log(initService.config)

  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  // }
  title = 'inventoryApp';

  role = 'Admin'
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef
  @ViewChild('name', {static: true}) name!: ElementRef;

}
