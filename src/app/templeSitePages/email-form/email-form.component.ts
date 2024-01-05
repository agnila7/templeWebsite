import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/Services/email.service';
import { NotificationService, NotificationType } from 'src/app/Services/notification.service';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent  {

  emailForm!: FormGroup;
  

  constructor(private emailService: EmailService, private fb: FormBuilder, private notificationService: NotificationService) {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
      subject: ['', Validators.required],
    })
  }

  onSubmit() {
    this.emailService.sendEmail(this.emailForm.value).subscribe({
      next: (response: any) => {
        this.notificationService.sendMessage({message: 'Email sent successfully!', type: NotificationType.success});
      },
      error: (error: any) => {
        this.notificationService.sendMessage({message: 'Error sending email: ' + error.error.msg, type: NotificationType.error});
      }
    });
  }

}

export type Email = {
  name: string,
  email: string,
  message: string,
  subject: string
}

