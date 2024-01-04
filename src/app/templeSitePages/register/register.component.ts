import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { UserRole } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [new FormControl('', Validators.required)],
    });
  }

  public onSubmit() {
    this.authService.registerNewUser(
      {...this.registerForm.value, role: UserRole.GENERAL_USER}
    );
  }
}
