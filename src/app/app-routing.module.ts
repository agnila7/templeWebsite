import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { RoleGuard } from './role.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { UserRole } from './models/user.model';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FileDownloaderComponent } from './file-downloader/file-downloader.component';
import { AboutBSOComponent } from './templeSitePages/about-bso/about-bso.component';
import { AboutTempleComponent } from './templeSitePages/about-temple/about-temple.component';
import { WelcomeComponent } from './templeSitePages/welcome/welcome.component';
import { AlmsCalendarComponent } from './calendar/almsCalendar.component';

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: 'upload/images', component: ImageUploadComponent, canActivate: [RoleGuard], data: {roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN]}},
  {path: 'upload/files', component: DocumentUploadComponent, canActivate: [RoleGuard], data: {roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN]}},
  {path: 'media/gallery', component: CarouselComponent},
  {path: 'download/files', component: FileDownloaderComponent},
  {path: 'calendar/events', component: CalendarComponent},
  {path: 'calendar/alms', component: AlmsCalendarComponent},
  {path: 'bso', component: AboutBSOComponent},
  {path: 'temple', component: AboutTempleComponent},
  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
