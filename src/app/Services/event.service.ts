import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpUrl } from './user.service';
import { TempleEvent } from '../models/templeEvent.model';
import { RequestType } from '../calendar/calendar.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  addNewEvent(event: TempleEvent){
    if(!event){
      console.log('Event could not be added');
      return;
    }

    this.http.post(AddEventUrl, event).subscribe({
      next: result=>{
        console.log('Event added successfully');
      },
      error: error=>{
        console.log('Event could not be added', error);
      }
    });
  }

  editEvent(event: TempleEvent){
    if(!event){
      console.log('Event could not be updated');
      return;
    }

    this.http.post(EditEventUrl, event).subscribe({
      next: result=>{
        console.log('Event updated successfully');
      },
      error: error=>{
        console.log('Event could not be updated', error);
      }
    });
  }

  deleteEvent(event: TempleEvent){
    if(!event){
      console.log('Event could not be deleted');
      return;
    }

    this.http.post(DeleteEventUrl, event).subscribe({
      next: result=>{
        console.log('Event deleted successfully');
      },
      error: error=>{
        console.log('Event could not be deleted', error);
      }
    });
  }

  getAllEvents(){
    return this.http.get(GetAllEventsUrl);
  }
}

export const AddEventUrl = httpUrl + 'operation/event/add';
export const EditEventUrl = httpUrl + 'operation/event/edit';
export const DeleteEventUrl = httpUrl + 'operation/event/delete';
export const GetAllEventsUrl = httpUrl + 'operation/event/all';