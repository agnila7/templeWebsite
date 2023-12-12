import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { UserRole } from './Services/user.service';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  {path: 'upload', component: UploadComponent, canActivate: [RoleGuard], data: {roles: [UserRole.ADMIN, UserRole.SUPER_ADMIN]}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
