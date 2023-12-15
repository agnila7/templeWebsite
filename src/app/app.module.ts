import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScheduleModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
     DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
