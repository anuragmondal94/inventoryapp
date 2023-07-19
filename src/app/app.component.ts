import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import {LocalStorageToken} from './localStorag.token'
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event)
    // })

    // using rxjs filter to listen to a specific event
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation Started')
    })

    
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('Navigation Completed')
    })
    this.name.nativeElement.innerText = "Hilton Hotel" 
    this.localStorage.setItem('name', 'Hilton Hotel')
  }

  constructor(@Inject(LocalStorageToken) private localStorage: any,
  private initService: InitService,
  private configService: ConfigService,
  private router:Router
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
