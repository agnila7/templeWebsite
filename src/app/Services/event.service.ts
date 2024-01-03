import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpUrl } from './user.service';
import { TempleEvent } from '../models/templeEvent.model';
import { RequestType } from '../calendar/calendar.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  operationUrl = httpUrl + 'operation/event/';
  AddOperationUrl = this.operationUrl + 'add';
  EditOperationUrl = this.operationUrl + 'edit';
  DeleteOperationUrl = this.operationUrl + 'delete';
  GetOperationUrl = this.operationUrl + 'all';

  constructor(protected http: HttpClient) { }

  addNewEvent(event: TempleEvent){
    if(!event){
      console.log('Event could not be added');
      return;
    }

    this.http.post(this.AddOperationUrl, event).subscribe({
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

    this.http.post(this.EditOperationUrl, event).subscribe({
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

    this.http.post(this.DeleteOperationUrl, event).subscribe({
      next: result=>{
        console.log('Event deleted successfully');
      },
      error: error=>{
        console.log('Event could not be deleted', error);
      }
    });
  }

  getAllEvents(){
    return this.http.get(this.GetOperationUrl);
  }
}