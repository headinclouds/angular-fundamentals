import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import {Routes} from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { ErrorsComponent } from "./errors/errors.component";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '404', component: ErrorsComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'}
    
]