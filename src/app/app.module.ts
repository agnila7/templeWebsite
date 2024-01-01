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
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ImageUploadComponent,
    DocumentUploadComponent,
    CarouselComponent,
    FileDownloaderComponent
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
    MatInputModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
     DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
