import { Component } from '@angular/core';
import { User, UserLoginInfo, UserRole, UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TempleWebsite';
  constructor(private userService: UserService){
    this.registerNewUser({name: 'Chapal', email: 'chapalbuet@gmail.com', password: '12345', role: UserRole.SUPER_ADMIN});
    this.loginUser({email: 'chapalbuet@gmail.com', password: '12345'});
  }

  registerNewUser(user: User){
    this.userService.registerUser(user).subscribe({
      next: result=>{
          console.log('User registered successfully');
        },
      error: error=>{
        console.log('User could not be registered: ', error);
      }
    })
  }

  loginUser(userLogin: UserLoginInfo){
    this.userService.loginUser(userLogin).subscribe({
      next: result=>{
          console.log('User Logged In successfully');
        },
      error: error=>{
        console.log('User could not be Logged In: ', error);
      }
    })
  }
}
