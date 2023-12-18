import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { RoleGuard } from './role.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { UserRole } from './models/user.model';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: 'upload/images', component: ImageUploadComponent, canActivate: [RoleGuard], data: {roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN]}},
  {path: 'upload/files', component: DocumentUploadComponent, canActivate: [RoleGuard], data: {roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN]}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
