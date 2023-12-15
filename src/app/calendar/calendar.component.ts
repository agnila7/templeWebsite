import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService, EventSettingsModel, View,ActionEventArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import * as _ from 'lodash';
import { TempleEvent } from '../models/templeEvent.model'
import { EventService } from '../Services/event.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class CalendarComponent {
  @ViewChild(ScheduleComponent)
  public scheduleObj?: ScheduleComponent;
  oldData: object[] = [];
  flag=false;
  public currentView: View = 'Month';
  public data: TempleEvent[] = [];
  

  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  };
    
  constructor(private eventService: EventService) { 
    this.eventService.getAllEvents().subscribe({
      next: (result: any)=>{
         if(this.scheduleObj){
          this.scheduleObj.eventSettings.dataSource = result;
         }
      },
      error: error=>{
        console.log('Could not get events', error);
      }
    });
  }

  actionComplete($event: ActionEventArgs){
    //console.log($event);
    // if($event.data?.length){
    //   this.eventService.updateEvent( (<TempleEvent[]>$event.data)[0], <RequestType>$event.requestType);
    // }
    if($event.addedRecords && $event.addedRecords.length){
      this.eventService.addNewEvent((<TempleEvent[]>$event.addedRecords)[0]);
    }else if($event.changedRecords && $event.changedRecords.length){
      this.eventService.editEvent((<TempleEvent[]>$event.changedRecords)[0]);
    }else if($event.deletedRecords && $event.deletedRecords.length){
      this.eventService.deleteEvent((<TempleEvent[]>$event.deletedRecords)[0]);
    }
  };
}

export enum RequestType{
  CREATE = 'eventCreated',
  UPDATE = 'eventChanged',
  DELETE = 'eventRemoved'
}
