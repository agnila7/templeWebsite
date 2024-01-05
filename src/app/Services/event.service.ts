import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerUrl } from './user.service';
import { TempleEvent } from '../models/templeEvent.model';
import { RequestType } from '../calendar/calendar.component';
import { NotificationService, NotificationType } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public operationUrl = ServerUrl + 'operation/event/';
  AddOperationUrl = this.operationUrl + 'add';
  EditOperationUrl = this.operationUrl + 'edit';
  DeleteOperationUrl = this.operationUrl + 'delete';
  GetOperationUrl = this.operationUrl + 'all';

  constructor(protected http: HttpClient, private notificationService: NotificationService) { }

  addNewEvent(event: TempleEvent){
    if(!event){
      console.log('Event could not be added');
      return;
    }

    this.http.post(this.AddOperationUrl, event).subscribe({
      next: result=>{
        this.notificationService.sendMessage({message: 'Event added successfully', type: NotificationType.success});
      },
      error: error=>{
        this.notificationService.sendMessage({message: 'Event could not be added: ' + error.error.msg, type: NotificationType.error});
      }
    });
  }

  editEvent(event: TempleEvent){
    if(!event){
      this.notificationService.sendMessage({message: 'Event could not be added', type: NotificationType.error});
      return;
    }

    this.http.post(this.EditOperationUrl, event).subscribe({
      next: result=>{
        this.notificationService.sendMessage({message: 'Event updated successfully', type: NotificationType.success});
      },
      error: error=>{
        this.notificationService.sendMessage({message: 'Event could not be updated: ' + error.error.msg, type: NotificationType.error});
      }
    });
  }

  deleteEvent(event: TempleEvent){
    if(!event){
      this.notificationService.sendMessage({message: 'Event could not be deleted', type: NotificationType.error});
      return;
    }

    this.http.post(this.DeleteOperationUrl, event).subscribe({
      next: result=>{
        this.notificationService.sendMessage({message: 'Event deleted successfully', type: NotificationType.success});
      },
      error: error=>{
        this.notificationService.sendMessage({message: 'Event could not be deleted: ' + error.error.msg, type: NotificationType.error});
      }
    });
  }

  getAllEvents(){
    return this.http.get(this.GetOperationUrl);
  }
}