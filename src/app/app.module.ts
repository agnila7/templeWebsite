import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from "@syncfusion/ej2-angular-navigations";
import { FileDownloaderComponent } from './file-downloader/file-downloader.component';
import { MatSelectModule } from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import  {MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import  {MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './templeSitePages/home/home.component';
import { AboutBSOComponent } from './templeSitePages/about-bso/about-bso.component';
import { AboutTempleComponent } from './templeSitePages/about-temple/about-temple.component';
import { WelcomeComponent } from './templeSitePages/welcome/welcome.component'
import { EventCalendarComponent } from './calendar/eventCalendar.component';
import { AlmsCalendarComponent } from './calendar/almsCalendar.component';
import { CommitteeComponent } from './templeSitePages/committee/committee.component';
import { TrusteeComponent } from './templeSitePages/trustee/trustee.component';
import { ContactComponent } from './templeSitePages/contact/contact.component';
import { EmailFormComponent } from './templeSitePages/email-form/email-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ImageUploadComponent,
    DocumentUploadComponent,
    CarouselComponent,
    FileDownloaderComponent,
    HomeComponent,
    AboutBSOComponent,
    AboutTempleComponent,
    WelcomeComponent,
    EventCalendarComponent,
    AlmsCalendarComponent,
    CommitteeComponent,
    TrusteeComponent,
    ContactComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScheduleModule,
    CarouselModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
     DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
