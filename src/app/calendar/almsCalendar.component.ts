import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService, EventSettingsModel, View,ActionEventArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { Component } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { AlmsService } from '../Services/alms.service';
import { NotificationService } from '../Services/notification.service';
@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class AlmsCalendarComponent extends CalendarComponent{
    constructor(almsService: AlmsService, notificationService: NotificationService){
        super(almsService, notificationService);
    }
}