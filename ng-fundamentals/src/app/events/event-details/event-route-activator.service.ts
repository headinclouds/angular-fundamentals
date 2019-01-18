import {CanActivate} from "@angular/router";
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import {Router } from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';

@Injectable()

export class EventRouteActivator implements CanActivate {
    //event:any;

    constructor(private eventService: EventService, private router: Router){

    }

    canActivate (route:ActivatedRouteSnapshot){
        const eventExist = !!this.eventService.getEvent(+route.params.id);
        if(!eventExist) 
            this.router.navigate(['/404']);
            return eventExist; 
    }
}