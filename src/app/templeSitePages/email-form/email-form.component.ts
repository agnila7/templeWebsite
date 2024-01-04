import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/Services/email.service';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent  {

  emailForm!: FormGroup;
  

  constructor(private emailService: EmailService, private fb: FormBuilder) {
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
        console.log('Email sent successfully!');
      },
      error: (error: any) => {
        console.log('Error sending email:', error);
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

