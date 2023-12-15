import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { RoleGuard } from './role.guard';
import { CalendarComponent } from './calendar/calendar.component';
import { UserRole } from './models/user.model';

const routes: Routes = [
  {path: 'upload', component: UploadComponent, canActivate: [RoleGuard], data: {roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN]}},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
