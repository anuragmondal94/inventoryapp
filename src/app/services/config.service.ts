import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from '../rooms/services/routeConfig';
import { RouteConfigToken } from '../rooms/services/routeConfig.service';
import { Conditional } from '@angular/compiler';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) { 
    console.log('ConfigService')
    console.log(this.configToken)
  }
}
